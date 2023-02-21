# `linuxWebAppSlot` Submodule <a name="`linuxWebAppSlot` Submodule" id="@cdktf/provider-azurerm.linuxWebAppSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxWebAppSlot <a name="LinuxWebAppSlot" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot azurerm_linux_web_app_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlot(scope: Construct, id: string, config: LinuxWebAppSlotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig">LinuxWebAppSlotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig">LinuxWebAppSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientAffinityEnabled">resetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientCertificateEnabled">resetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientCertificateExclusionPaths">resetClientCertificateExclusionPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientCertificateMode">resetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetServicePlanId">resetServicePlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetZipDeployFile">resetZipDeployFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putAuthSettings"></a>

```typescript
public putAuthSettings(value: LinuxWebAppSlotAuthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings">LinuxWebAppSlotAuthSettings</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putBackup"></a>

```typescript
public putBackup(value: LinuxWebAppSlotBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup">LinuxWebAppSlotBackup</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putConnectionString"></a>

```typescript
public putConnectionString(value: IResolvable | LinuxWebAppSlotConnectionString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putConnectionString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putIdentity"></a>

```typescript
public putIdentity(value: LinuxWebAppSlotIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity">LinuxWebAppSlotIdentity</a>

---

##### `putLogs` <a name="putLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putLogs"></a>

```typescript
public putLogs(value: LinuxWebAppSlotLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs">LinuxWebAppSlotLogs</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putSiteConfig"></a>

```typescript
public putSiteConfig(value: LinuxWebAppSlotSiteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig">LinuxWebAppSlotSiteConfig</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | LinuxWebAppSlotStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putTimeouts"></a>

```typescript
public putTimeouts(value: LinuxWebAppSlotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts">LinuxWebAppSlotTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetAppSettings"></a>

```typescript
public resetAppSettings(): void
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetAuthSettings"></a>

```typescript
public resetAuthSettings(): void
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetBackup"></a>

```typescript
public resetBackup(): void
```

##### `resetClientAffinityEnabled` <a name="resetClientAffinityEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientAffinityEnabled"></a>

```typescript
public resetClientAffinityEnabled(): void
```

##### `resetClientCertificateEnabled` <a name="resetClientCertificateEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientCertificateEnabled"></a>

```typescript
public resetClientCertificateEnabled(): void
```

##### `resetClientCertificateExclusionPaths` <a name="resetClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientCertificateExclusionPaths"></a>

```typescript
public resetClientCertificateExclusionPaths(): void
```

##### `resetClientCertificateMode` <a name="resetClientCertificateMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetClientCertificateMode"></a>

```typescript
public resetClientCertificateMode(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetKeyVaultReferenceIdentityId"></a>

```typescript
public resetKeyVaultReferenceIdentityId(): void
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetLogs"></a>

```typescript
public resetLogs(): void
```

##### `resetServicePlanId` <a name="resetServicePlanId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetServicePlanId"></a>

```typescript
public resetServicePlanId(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```

##### `resetZipDeployFile` <a name="resetZipDeployFile" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.resetZipDeployFile"></a>

```typescript
public resetZipDeployFile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isConstruct"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

linuxWebAppSlot.LinuxWebAppSlot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isTerraformElement"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

linuxWebAppSlot.LinuxWebAppSlot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isTerraformResource"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

linuxWebAppSlot.LinuxWebAppSlot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appMetadata">appMetadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference">LinuxWebAppSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference">LinuxWebAppSlotBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList">LinuxWebAppSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.defaultHostname">defaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference">LinuxWebAppSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference">LinuxWebAppSlotLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.outboundIpAddressList">outboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.possibleOutboundIpAddressList">possibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference">LinuxWebAppSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList">LinuxWebAppSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList">LinuxWebAppSlotStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference">LinuxWebAppSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appServiceIdInput">appServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appSettingsInput">appSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings">LinuxWebAppSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup">LinuxWebAppSlotBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientAffinityEnabledInput">clientAffinityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateEnabledInput">clientCertificateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateExclusionPathsInput">clientCertificateExclusionPathsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateModeInput">clientCertificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.connectionStringInput">connectionStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity">LinuxWebAppSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs">LinuxWebAppSlotLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.servicePlanIdInput">servicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig">LinuxWebAppSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts">LinuxWebAppSlotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.zipDeployFileInput">zipDeployFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appServiceId">appServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateMode">clientCertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.servicePlanId">servicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.zipDeployFile">zipDeployFile</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appMetadata`<sup>Required</sup> <a name="appMetadata" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appMetadata"></a>

```typescript
public readonly appMetadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.authSettings"></a>

```typescript
public readonly authSettings: LinuxWebAppSlotAuthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference">LinuxWebAppSlotAuthSettingsOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.backup"></a>

```typescript
public readonly backup: LinuxWebAppSlotBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference">LinuxWebAppSlotBackupOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.connectionString"></a>

```typescript
public readonly connectionString: LinuxWebAppSlotConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList">LinuxWebAppSlotConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.defaultHostname"></a>

```typescript
public readonly defaultHostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.identity"></a>

```typescript
public readonly identity: LinuxWebAppSlotIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference">LinuxWebAppSlotIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.logs"></a>

```typescript
public readonly logs: LinuxWebAppSlotLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference">LinuxWebAppSlotLogsOutputReference</a>

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string;
```

- *Type:* string

---

##### `outboundIpAddressList`<sup>Required</sup> <a name="outboundIpAddressList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.outboundIpAddressList"></a>

```typescript
public readonly outboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.possibleOutboundIpAddresses"></a>

```typescript
public readonly possibleOutboundIpAddresses: string;
```

- *Type:* string

---

##### `possibleOutboundIpAddressList`<sup>Required</sup> <a name="possibleOutboundIpAddressList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.possibleOutboundIpAddressList"></a>

```typescript
public readonly possibleOutboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.siteConfig"></a>

```typescript
public readonly siteConfig: LinuxWebAppSlotSiteConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference">LinuxWebAppSlotSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.siteCredential"></a>

```typescript
public readonly siteCredential: LinuxWebAppSlotSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList">LinuxWebAppSlotSiteCredentialList</a>

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.storageAccount"></a>

```typescript
public readonly storageAccount: LinuxWebAppSlotStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList">LinuxWebAppSlotStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.timeouts"></a>

```typescript
public readonly timeouts: LinuxWebAppSlotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference">LinuxWebAppSlotTimeoutsOutputReference</a>

---

##### `appServiceIdInput`<sup>Optional</sup> <a name="appServiceIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appServiceIdInput"></a>

```typescript
public readonly appServiceIdInput: string;
```

- *Type:* string

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appSettingsInput"></a>

```typescript
public readonly appSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.authSettingsInput"></a>

```typescript
public readonly authSettingsInput: LinuxWebAppSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings">LinuxWebAppSlotAuthSettings</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.backupInput"></a>

```typescript
public readonly backupInput: LinuxWebAppSlotBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup">LinuxWebAppSlotBackup</a>

---

##### `clientAffinityEnabledInput`<sup>Optional</sup> <a name="clientAffinityEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientAffinityEnabledInput"></a>

```typescript
public readonly clientAffinityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateEnabledInput`<sup>Optional</sup> <a name="clientCertificateEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateEnabledInput"></a>

```typescript
public readonly clientCertificateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateExclusionPathsInput`<sup>Optional</sup> <a name="clientCertificateExclusionPathsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateExclusionPathsInput"></a>

```typescript
public readonly clientCertificateExclusionPathsInput: string;
```

- *Type:* string

---

##### `clientCertificateModeInput`<sup>Optional</sup> <a name="clientCertificateModeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateModeInput"></a>

```typescript
public readonly clientCertificateModeInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: IResolvable | LinuxWebAppSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.identityInput"></a>

```typescript
public readonly identityInput: LinuxWebAppSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity">LinuxWebAppSlotIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.keyVaultReferenceIdentityIdInput"></a>

```typescript
public readonly keyVaultReferenceIdentityIdInput: string;
```

- *Type:* string

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.logsInput"></a>

```typescript
public readonly logsInput: LinuxWebAppSlotLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs">LinuxWebAppSlotLogs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `servicePlanIdInput`<sup>Optional</sup> <a name="servicePlanIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.servicePlanIdInput"></a>

```typescript
public readonly servicePlanIdInput: string;
```

- *Type:* string

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.siteConfigInput"></a>

```typescript
public readonly siteConfigInput: LinuxWebAppSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig">LinuxWebAppSlotSiteConfig</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | LinuxWebAppSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LinuxWebAppSlotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts">LinuxWebAppSlotTimeouts</a> | cdktf.IResolvable

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `zipDeployFileInput`<sup>Optional</sup> <a name="zipDeployFileInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.zipDeployFileInput"></a>

```typescript
public readonly zipDeployFileInput: string;
```

- *Type:* string

---

##### `appServiceId`<sup>Required</sup> <a name="appServiceId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appServiceId"></a>

```typescript
public readonly appServiceId: string;
```

- *Type:* string

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientAffinityEnabled`<sup>Required</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientAffinityEnabled"></a>

```typescript
public readonly clientAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateEnabled`<sup>Required</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateExclusionPaths`<sup>Required</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateExclusionPaths"></a>

```typescript
public readonly clientCertificateExclusionPaths: string;
```

- *Type:* string

---

##### `clientCertificateMode`<sup>Required</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.clientCertificateMode"></a>

```typescript
public readonly clientCertificateMode: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.servicePlanId"></a>

```typescript
public readonly servicePlanId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `zipDeployFile`<sup>Required</sup> <a name="zipDeployFile" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.zipDeployFile"></a>

```typescript
public readonly zipDeployFile: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxWebAppSlotAuthSettings <a name="LinuxWebAppSlotAuthSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotAuthSettings: linuxWebAppSlot.LinuxWebAppSlotAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Authentication / Authorization feature be enabled? |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory">LinuxWebAppSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>{[ key: string ]: string}</code> | Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | The default authentication provider to use when multiple providers are configured. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook">LinuxWebAppSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub">LinuxWebAppSlotAuthSettingsGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle">LinuxWebAppSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.issuer">issuer</a></code> | <code>string</code> | The OpenID Connect Issuer URI that represents the entity which issues access tokens. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft">LinuxWebAppSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The RuntimeVersion of the Authentication / Authorization feature in use. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | The number of hours after session token expiration that a session token can be used to call the token refresh API. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter">LinuxWebAppSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Authentication / Authorization feature be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#enabled LinuxWebAppSlot#enabled}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: LinuxWebAppSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory">LinuxWebAppSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#active_directory LinuxWebAppSlot#active_directory}

---

##### `additionalLoginParameters`<sup>Optional</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.additionalLoginParameters"></a>

```typescript
public readonly additionalLoginParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#additional_login_parameters LinuxWebAppSlot#additional_login_parameters}

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#allowed_external_redirect_urls LinuxWebAppSlot#allowed_external_redirect_urls}

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

The default authentication provider to use when multiple providers are configured.

Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#default_provider LinuxWebAppSlot#default_provider}

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.facebook"></a>

```typescript
public readonly facebook: LinuxWebAppSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook">LinuxWebAppSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#facebook LinuxWebAppSlot#facebook}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.github"></a>

```typescript
public readonly github: LinuxWebAppSlotAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub">LinuxWebAppSlotAuthSettingsGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#github LinuxWebAppSlot#github}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.google"></a>

```typescript
public readonly google: LinuxWebAppSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle">LinuxWebAppSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#google LinuxWebAppSlot#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OpenID Connect Issuer URI that represents the entity which issues access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#issuer LinuxWebAppSlot#issuer}

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.microsoft"></a>

```typescript
public readonly microsoft: LinuxWebAppSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft">LinuxWebAppSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#microsoft LinuxWebAppSlot#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The RuntimeVersion of the Authentication / Authorization feature in use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#runtime_version LinuxWebAppSlot#runtime_version}

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

The number of hours after session token expiration that a session token can be used to call the token refresh API.

Defaults to `72` hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#token_refresh_extension_hours LinuxWebAppSlot#token_refresh_extension_hours}

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#token_store_enabled LinuxWebAppSlot#token_store_enabled}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.twitter"></a>

```typescript
public readonly twitter: LinuxWebAppSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter">LinuxWebAppSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#twitter LinuxWebAppSlot#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#unauthenticated_client_action LinuxWebAppSlot#unauthenticated_client_action}

---

### LinuxWebAppSlotAuthSettingsActiveDirectory <a name="LinuxWebAppSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotAuthSettingsActiveDirectory: linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>string</code> | The ID of the Client to use to authenticate with Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the Client to use to authenticate with Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#allowed_audiences LinuxWebAppSlot#allowed_audiences}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}

---

### LinuxWebAppSlotAuthSettingsFacebook <a name="LinuxWebAppSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotAuthSettingsFacebook: linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.appId">appId</a></code> | <code>string</code> | The App ID of the Facebook app used for login. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>string</code> | The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The App ID of the Facebook app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_id LinuxWebAppSlot#app_id}

---

##### `appSecret`<sup>Optional</sup> <a name="appSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_secret LinuxWebAppSlot#app_secret}

---

##### `appSecretSettingName`<sup>Optional</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_secret_setting_name LinuxWebAppSlot#app_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}

---

### LinuxWebAppSlotAuthSettingsGithub <a name="LinuxWebAppSlotAuthSettingsGithub" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotAuthSettingsGithub: linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.clientId">clientId</a></code> | <code>string</code> | The ID of the GitHub app used for login. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the GitHub app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}

---

### LinuxWebAppSlotAuthSettingsGoogle <a name="LinuxWebAppSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotAuthSettingsGoogle: linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>string</code> | The OpenID Connect Client ID for the Google web application. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OpenID Connect Client ID for the Google web application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}

---

### LinuxWebAppSlotAuthSettingsMicrosoft <a name="LinuxWebAppSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotAuthSettingsMicrosoft: linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client ID that was created for the app used for authentication. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>string</code> | The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client ID that was created for the app used for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}

---

### LinuxWebAppSlotAuthSettingsTwitter <a name="LinuxWebAppSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotAuthSettingsTwitter: linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>string</code> | The OAuth 1.0a consumer key of the Twitter application used for sign-in. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

The OAuth 1.0a consumer key of the Twitter application used for sign-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#consumer_key LinuxWebAppSlot#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#consumer_secret LinuxWebAppSlot#consumer_secret}

---

##### `consumerSecretSettingName`<sup>Optional</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#consumer_secret_setting_name LinuxWebAppSlot#consumer_secret_setting_name}

---

### LinuxWebAppSlotBackup <a name="LinuxWebAppSlotBackup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotBackup: linuxWebAppSlot.LinuxWebAppSlotBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.name">name</a></code> | <code>string</code> | The name which should be used for this Backup. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule">LinuxWebAppSlotBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | The SAS URL to the container. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should this backup job be enabled? |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name which should be used for this Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.schedule"></a>

```typescript
public readonly schedule: LinuxWebAppSlotBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule">LinuxWebAppSlotBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#schedule LinuxWebAppSlot#schedule}

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

The SAS URL to the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#storage_account_url LinuxWebAppSlot#storage_account_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should this backup job be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#enabled LinuxWebAppSlot#enabled}

---

### LinuxWebAppSlotBackupSchedule <a name="LinuxWebAppSlotBackupSchedule" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotBackupSchedule: linuxWebAppSlot.LinuxWebAppSlotBackupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`). |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the service keep at least one backup, regardless of age of backup. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | After how many days backups should be deleted. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.startTime">startTime</a></code> | <code>string</code> | When the schedule should start working in RFC-3339 format. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#frequency_interval LinuxWebAppSlot#frequency_interval}

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#frequency_unit LinuxWebAppSlot#frequency_unit}

---

##### `keepAtLeastOneBackup`<sup>Optional</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#keep_at_least_one_backup LinuxWebAppSlot#keep_at_least_one_backup}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

After how many days backups should be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_period_days LinuxWebAppSlot#retention_period_days}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

When the schedule should start working in RFC-3339 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#start_time LinuxWebAppSlot#start_time}

---

### LinuxWebAppSlotConfig <a name="LinuxWebAppSlotConfig" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotConfig: linuxWebAppSlot.LinuxWebAppSlotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.appServiceId">appServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_service_id LinuxWebAppSlot#app_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig">LinuxWebAppSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_settings LinuxWebAppSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings">LinuxWebAppSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup">LinuxWebAppSlotBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_affinity_enabled LinuxWebAppSlot#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_certificate_enabled LinuxWebAppSlot#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>string</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientCertificateMode">clientCertificateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_certificate_mode LinuxWebAppSlot#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.connectionString">connectionString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a>[]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#enabled LinuxWebAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#https_only LinuxWebAppSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#id LinuxWebAppSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity">LinuxWebAppSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#key_vault_reference_identity_id LinuxWebAppSlot#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs">LinuxWebAppSlotLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.servicePlanId">servicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#service_plan_id LinuxWebAppSlot#service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#tags LinuxWebAppSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts">LinuxWebAppSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.zipDeployFile">zipDeployFile</a></code> | <code>string</code> | The local path and filename of the Zip packaged application to deploy to this Windows Web App. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServiceId`<sup>Required</sup> <a name="appServiceId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.appServiceId"></a>

```typescript
public readonly appServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_service_id LinuxWebAppSlot#app_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}.

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.siteConfig"></a>

```typescript
public readonly siteConfig: LinuxWebAppSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig">LinuxWebAppSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#site_config LinuxWebAppSlot#site_config}

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_settings LinuxWebAppSlot#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.authSettings"></a>

```typescript
public readonly authSettings: LinuxWebAppSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings">LinuxWebAppSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#auth_settings LinuxWebAppSlot#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.backup"></a>

```typescript
public readonly backup: LinuxWebAppSlotBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup">LinuxWebAppSlotBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#backup LinuxWebAppSlot#backup}

---

##### `clientAffinityEnabled`<sup>Optional</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientAffinityEnabled"></a>

```typescript
public readonly clientAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_affinity_enabled LinuxWebAppSlot#client_affinity_enabled}.

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_certificate_enabled LinuxWebAppSlot#client_certificate_enabled}.

---

##### `clientCertificateExclusionPaths`<sup>Optional</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientCertificateExclusionPaths"></a>

```typescript
public readonly clientCertificateExclusionPaths: string;
```

- *Type:* string

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_certificate_exclusion_paths LinuxWebAppSlot#client_certificate_exclusion_paths}

---

##### `clientCertificateMode`<sup>Optional</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.clientCertificateMode"></a>

```typescript
public readonly clientCertificateMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#client_certificate_mode LinuxWebAppSlot#client_certificate_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.connectionString"></a>

```typescript
public readonly connectionString: IResolvable | LinuxWebAppSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a>[]

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#connection_string LinuxWebAppSlot#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#enabled LinuxWebAppSlot#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#https_only LinuxWebAppSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#id LinuxWebAppSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.identity"></a>

```typescript
public readonly identity: LinuxWebAppSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity">LinuxWebAppSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#identity LinuxWebAppSlot#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#key_vault_reference_identity_id LinuxWebAppSlot#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.logs"></a>

```typescript
public readonly logs: LinuxWebAppSlotLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs">LinuxWebAppSlotLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#logs LinuxWebAppSlot#logs}

---

##### `servicePlanId`<sup>Optional</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.servicePlanId"></a>

```typescript
public readonly servicePlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#service_plan_id LinuxWebAppSlot#service_plan_id}.

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | LinuxWebAppSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#storage_account LinuxWebAppSlot#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#tags LinuxWebAppSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LinuxWebAppSlotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts">LinuxWebAppSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#timeouts LinuxWebAppSlot#timeouts}

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}.

---

##### `zipDeployFile`<sup>Optional</sup> <a name="zipDeployFile" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConfig.property.zipDeployFile"></a>

```typescript
public readonly zipDeployFile: string;
```

- *Type:* string

The local path and filename of the Zip packaged application to deploy to this Windows Web App.

**Note:** Using this value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#zip_deploy_file LinuxWebAppSlot#zip_deploy_file}

---

### LinuxWebAppSlotConnectionString <a name="LinuxWebAppSlotConnectionString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotConnectionString: linuxWebAppSlot.LinuxWebAppSlotConnectionString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString.property.name">name</a></code> | <code>string</code> | The name which should be used for this Connection. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString.property.type">type</a></code> | <code>string</code> | Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString.property.value">value</a></code> | <code>string</code> | The connection string value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name which should be used for this Connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#type LinuxWebAppSlot#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The connection string value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#value LinuxWebAppSlot#value}

---

### LinuxWebAppSlotIdentity <a name="LinuxWebAppSlotIdentity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotIdentity: linuxWebAppSlot.LinuxWebAppSlotIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#type LinuxWebAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#identity_ids LinuxWebAppSlot#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#type LinuxWebAppSlot#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#identity_ids LinuxWebAppSlot#identity_ids}.

---

### LinuxWebAppSlotLogs <a name="LinuxWebAppSlotLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotLogs: linuxWebAppSlot.LinuxWebAppSlotLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs">LinuxWebAppSlotLogsApplicationLogs</a></code> | application_logs block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.detailedErrorMessages">detailedErrorMessages</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#detailed_error_messages LinuxWebAppSlot#detailed_error_messages}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.failedRequestTracing">failedRequestTracing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#failed_request_tracing LinuxWebAppSlot#failed_request_tracing}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs">LinuxWebAppSlotLogsHttpLogs</a></code> | http_logs block. |

---

##### `applicationLogs`<sup>Optional</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: LinuxWebAppSlotLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs">LinuxWebAppSlotLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#application_logs LinuxWebAppSlot#application_logs}

---

##### `detailedErrorMessages`<sup>Optional</sup> <a name="detailedErrorMessages" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.detailedErrorMessages"></a>

```typescript
public readonly detailedErrorMessages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#detailed_error_messages LinuxWebAppSlot#detailed_error_messages}.

---

##### `failedRequestTracing`<sup>Optional</sup> <a name="failedRequestTracing" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.failedRequestTracing"></a>

```typescript
public readonly failedRequestTracing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#failed_request_tracing LinuxWebAppSlot#failed_request_tracing}.

---

##### `httpLogs`<sup>Optional</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs.property.httpLogs"></a>

```typescript
public readonly httpLogs: LinuxWebAppSlotLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs">LinuxWebAppSlotLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#http_logs LinuxWebAppSlot#http_logs}

---

### LinuxWebAppSlotLogsApplicationLogs <a name="LinuxWebAppSlotLogsApplicationLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotLogsApplicationLogs: linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs.property.fileSystemLevel">fileSystemLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#file_system_level LinuxWebAppSlot#file_system_level}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage</a></code> | azure_blob_storage block. |

---

##### `fileSystemLevel`<sup>Required</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs.property.fileSystemLevel"></a>

```typescript
public readonly fileSystemLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#file_system_level LinuxWebAppSlot#file_system_level}.

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#azure_blob_storage LinuxWebAppSlot#azure_blob_storage}

---

### LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage <a name="LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotLogsApplicationLogsAzureBlobStorage: linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#level LinuxWebAppSlot#level}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#sas_url LinuxWebAppSlot#sas_url}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#level LinuxWebAppSlot#level}.

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}.

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#sas_url LinuxWebAppSlot#sas_url}.

---

### LinuxWebAppSlotLogsHttpLogs <a name="LinuxWebAppSlotLogsHttpLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotLogsHttpLogs: linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage">LinuxWebAppSlotLogsHttpLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem">LinuxWebAppSlotLogsHttpLogsFileSystem</a></code> | file_system block. |

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: LinuxWebAppSlotLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage">LinuxWebAppSlotLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#azure_blob_storage LinuxWebAppSlot#azure_blob_storage}

---

##### `fileSystem`<sup>Optional</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs.property.fileSystem"></a>

```typescript
public readonly fileSystem: LinuxWebAppSlotLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem">LinuxWebAppSlotLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#file_system LinuxWebAppSlot#file_system}

---

### LinuxWebAppSlotLogsHttpLogsAzureBlobStorage <a name="LinuxWebAppSlotLogsHttpLogsAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotLogsHttpLogsAzureBlobStorage: linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#sas_url LinuxWebAppSlot#sas_url}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}. |

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#sas_url LinuxWebAppSlot#sas_url}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}.

---

### LinuxWebAppSlotLogsHttpLogsFileSystem <a name="LinuxWebAppSlotLogsHttpLogsFileSystem" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotLogsHttpLogsFileSystem: linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem.property.retentionInMb">retentionInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_mb LinuxWebAppSlot#retention_in_mb}. |

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}.

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem.property.retentionInMb"></a>

```typescript
public readonly retentionInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#retention_in_mb LinuxWebAppSlot#retention_in_mb}.

---

### LinuxWebAppSlotSiteConfig <a name="LinuxWebAppSlotSiteConfig" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfig: linuxWebAppSlot.LinuxWebAppSlotSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#always_on LinuxWebAppSlot#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#api_definition_url LinuxWebAppSlot#api_definition_url}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.apiManagementApiId">apiManagementApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#api_management_api_id LinuxWebAppSlot#api_management_api_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_command_line LinuxWebAppSlot#app_command_line}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack">LinuxWebAppSlotSiteConfigApplicationStack</a></code> | application_stack block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.autoHealEnabled">autoHealEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#auto_heal_enabled LinuxWebAppSlot#auto_heal_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.autoHealSetting">autoHealSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting">LinuxWebAppSlotSiteConfigAutoHealSetting</a></code> | auto_heal_setting block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#auto_swap_slot_name LinuxWebAppSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.containerRegistryManagedIdentityClientId">containerRegistryManagedIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#container_registry_managed_identity_client_id LinuxWebAppSlot#container_registry_managed_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.containerRegistryUseManagedIdentity">containerRegistryUseManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#container_registry_use_managed_identity LinuxWebAppSlot#container_registry_use_managed_identity}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors">LinuxWebAppSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#default_documents LinuxWebAppSlot#default_documents}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.ftpsState">ftpsState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ftps_state LinuxWebAppSlot#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>number</code> | The amount of time in minutes that a node is unhealthy before being removed from the load balancer. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#health_check_path LinuxWebAppSlot#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#http2_enabled LinuxWebAppSlot#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ip_restriction LinuxWebAppSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.loadBalancingMode">loadBalancingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#load_balancing_mode LinuxWebAppSlot#load_balancing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#local_mysql_enabled LinuxWebAppSlot#local_mysql_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#managed_pipeline_mode LinuxWebAppSlot#managed_pipeline_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#minimum_tls_version LinuxWebAppSlot#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#remote_debugging_enabled LinuxWebAppSlot#remote_debugging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#remote_debugging_version LinuxWebAppSlot#remote_debugging_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#scm_ip_restriction LinuxWebAppSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#scm_minimum_tls_version LinuxWebAppSlot#scm_minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#scm_use_main_ip_restriction LinuxWebAppSlot#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.use32BitWorker">use32BitWorker</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#use_32_bit_worker LinuxWebAppSlot#use_32_bit_worker}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#websockets_enabled LinuxWebAppSlot#websockets_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.workerCount">workerCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#worker_count LinuxWebAppSlot#worker_count}. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#always_on LinuxWebAppSlot#always_on}.

---

##### `apiDefinitionUrl`<sup>Optional</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.apiDefinitionUrl"></a>

```typescript
public readonly apiDefinitionUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#api_definition_url LinuxWebAppSlot#api_definition_url}.

---

##### `apiManagementApiId`<sup>Optional</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.apiManagementApiId"></a>

```typescript
public readonly apiManagementApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#api_management_api_id LinuxWebAppSlot#api_management_api_id}.

---

##### `appCommandLine`<sup>Optional</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#app_command_line LinuxWebAppSlot#app_command_line}.

---

##### `applicationStack`<sup>Optional</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.applicationStack"></a>

```typescript
public readonly applicationStack: LinuxWebAppSlotSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack">LinuxWebAppSlotSiteConfigApplicationStack</a>

application_stack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#application_stack LinuxWebAppSlot#application_stack}

---

##### `autoHealEnabled`<sup>Optional</sup> <a name="autoHealEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.autoHealEnabled"></a>

```typescript
public readonly autoHealEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#auto_heal_enabled LinuxWebAppSlot#auto_heal_enabled}.

---

##### `autoHealSetting`<sup>Optional</sup> <a name="autoHealSetting" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.autoHealSetting"></a>

```typescript
public readonly autoHealSetting: LinuxWebAppSlotSiteConfigAutoHealSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting">LinuxWebAppSlotSiteConfigAutoHealSetting</a>

auto_heal_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#auto_heal_setting LinuxWebAppSlot#auto_heal_setting}

---

##### `autoSwapSlotName`<sup>Optional</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#auto_swap_slot_name LinuxWebAppSlot#auto_swap_slot_name}.

---

##### `containerRegistryManagedIdentityClientId`<sup>Optional</sup> <a name="containerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.containerRegistryManagedIdentityClientId"></a>

```typescript
public readonly containerRegistryManagedIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#container_registry_managed_identity_client_id LinuxWebAppSlot#container_registry_managed_identity_client_id}.

---

##### `containerRegistryUseManagedIdentity`<sup>Optional</sup> <a name="containerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.containerRegistryUseManagedIdentity"></a>

```typescript
public readonly containerRegistryUseManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#container_registry_use_managed_identity LinuxWebAppSlot#container_registry_use_managed_identity}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.cors"></a>

```typescript
public readonly cors: LinuxWebAppSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors">LinuxWebAppSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#cors LinuxWebAppSlot#cors}

---

##### `defaultDocuments`<sup>Optional</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#default_documents LinuxWebAppSlot#default_documents}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ftps_state LinuxWebAppSlot#ftps_state}.

---

##### `healthCheckEvictionTimeInMin`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.healthCheckEvictionTimeInMin"></a>

```typescript
public readonly healthCheckEvictionTimeInMin: number;
```

- *Type:* number

The amount of time in minutes that a node is unhealthy before being removed from the load balancer.

Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#health_check_eviction_time_in_min LinuxWebAppSlot#health_check_eviction_time_in_min}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#health_check_path LinuxWebAppSlot#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#http2_enabled LinuxWebAppSlot#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: IResolvable | LinuxWebAppSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ip_restriction LinuxWebAppSlot#ip_restriction}.

---

##### `loadBalancingMode`<sup>Optional</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.loadBalancingMode"></a>

```typescript
public readonly loadBalancingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#load_balancing_mode LinuxWebAppSlot#load_balancing_mode}.

---

##### `localMysqlEnabled`<sup>Optional</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.localMysqlEnabled"></a>

```typescript
public readonly localMysqlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#local_mysql_enabled LinuxWebAppSlot#local_mysql_enabled}.

---

##### `managedPipelineMode`<sup>Optional</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#managed_pipeline_mode LinuxWebAppSlot#managed_pipeline_mode}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#minimum_tls_version LinuxWebAppSlot#minimum_tls_version}.

---

##### `remoteDebuggingEnabled`<sup>Optional</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#remote_debugging_enabled LinuxWebAppSlot#remote_debugging_enabled}.

---

##### `remoteDebuggingVersion`<sup>Optional</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#remote_debugging_version LinuxWebAppSlot#remote_debugging_version}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#scm_ip_restriction LinuxWebAppSlot#scm_ip_restriction}.

---

##### `scmMinimumTlsVersion`<sup>Optional</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.scmMinimumTlsVersion"></a>

```typescript
public readonly scmMinimumTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#scm_minimum_tls_version LinuxWebAppSlot#scm_minimum_tls_version}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#scm_use_main_ip_restriction LinuxWebAppSlot#scm_use_main_ip_restriction}.

---

##### `use32BitWorker`<sup>Optional</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.use32BitWorker"></a>

```typescript
public readonly use32BitWorker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#use_32_bit_worker LinuxWebAppSlot#use_32_bit_worker}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#vnet_route_all_enabled LinuxWebAppSlot#vnet_route_all_enabled}

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#websockets_enabled LinuxWebAppSlot#websockets_enabled}.

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#worker_count LinuxWebAppSlot#worker_count}.

---

### LinuxWebAppSlotSiteConfigApplicationStack <a name="LinuxWebAppSlotSiteConfigApplicationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigApplicationStack: linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.dockerImage">dockerImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#docker_image LinuxWebAppSlot#docker_image}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.dockerImageTag">dockerImageTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#docker_image_tag LinuxWebAppSlot#docker_image_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.dotnetVersion">dotnetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#dotnet_version LinuxWebAppSlot#dotnet_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.goVersion">goVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#go_version LinuxWebAppSlot#go_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.javaServer">javaServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#java_server LinuxWebAppSlot#java_server}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.javaServerVersion">javaServerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#java_server_version LinuxWebAppSlot#java_server_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.javaVersion">javaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#java_version LinuxWebAppSlot#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#node_version LinuxWebAppSlot#node_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.phpVersion">phpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#php_version LinuxWebAppSlot#php_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#python_version LinuxWebAppSlot#python_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ruby_version LinuxWebAppSlot#ruby_version}. |

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.dockerImage"></a>

```typescript
public readonly dockerImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#docker_image LinuxWebAppSlot#docker_image}.

---

##### `dockerImageTag`<sup>Optional</sup> <a name="dockerImageTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.dockerImageTag"></a>

```typescript
public readonly dockerImageTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#docker_image_tag LinuxWebAppSlot#docker_image_tag}.

---

##### `dotnetVersion`<sup>Optional</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.dotnetVersion"></a>

```typescript
public readonly dotnetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#dotnet_version LinuxWebAppSlot#dotnet_version}.

---

##### `goVersion`<sup>Optional</sup> <a name="goVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.goVersion"></a>

```typescript
public readonly goVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#go_version LinuxWebAppSlot#go_version}.

---

##### `javaServer`<sup>Optional</sup> <a name="javaServer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.javaServer"></a>

```typescript
public readonly javaServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#java_server LinuxWebAppSlot#java_server}.

---

##### `javaServerVersion`<sup>Optional</sup> <a name="javaServerVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.javaServerVersion"></a>

```typescript
public readonly javaServerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#java_server_version LinuxWebAppSlot#java_server_version}.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#java_version LinuxWebAppSlot#java_version}.

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#node_version LinuxWebAppSlot#node_version}.

---

##### `phpVersion`<sup>Optional</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.phpVersion"></a>

```typescript
public readonly phpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#php_version LinuxWebAppSlot#php_version}.

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#python_version LinuxWebAppSlot#python_version}.

---

##### `rubyVersion`<sup>Optional</sup> <a name="rubyVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ruby_version LinuxWebAppSlot#ruby_version}.

---

### LinuxWebAppSlotSiteConfigAutoHealSetting <a name="LinuxWebAppSlotSiteConfigAutoHealSetting" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigAutoHealSetting: linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction">LinuxWebAppSlotSiteConfigAutoHealSettingAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger">LinuxWebAppSlotSiteConfigAutoHealSettingTrigger</a></code> | trigger block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting.property.action"></a>

```typescript
public readonly action: LinuxWebAppSlotSiteConfigAutoHealSettingAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction">LinuxWebAppSlotSiteConfigAutoHealSettingAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#action LinuxWebAppSlot#action}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting.property.trigger"></a>

```typescript
public readonly trigger: LinuxWebAppSlotSiteConfigAutoHealSettingTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger">LinuxWebAppSlotSiteConfigAutoHealSettingTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#trigger LinuxWebAppSlot#trigger}

---

### LinuxWebAppSlotSiteConfigAutoHealSettingAction <a name="LinuxWebAppSlotSiteConfigAutoHealSettingAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigAutoHealSettingAction: linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#action_type LinuxWebAppSlot#action_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction.property.minimumProcessExecutionTime">minimumProcessExecutionTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#minimum_process_execution_time LinuxWebAppSlot#minimum_process_execution_time}. |

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#action_type LinuxWebAppSlot#action_type}.

---

##### `minimumProcessExecutionTime`<sup>Optional</sup> <a name="minimumProcessExecutionTime" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction.property.minimumProcessExecutionTime"></a>

```typescript
public readonly minimumProcessExecutionTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#minimum_process_execution_time LinuxWebAppSlot#minimum_process_execution_time}.

---

### LinuxWebAppSlotSiteConfigAutoHealSettingTrigger <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTrigger" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigAutoHealSettingTrigger: linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests</a></code> | requests block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger.property.slowRequest">slowRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest</a></code> | slow_request block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger.property.statusCode">statusCode</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a>[]</code> | status_code block. |

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger.property.requests"></a>

```typescript
public readonly requests: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests</a>

requests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#requests LinuxWebAppSlot#requests}

---

##### `slowRequest`<sup>Optional</sup> <a name="slowRequest" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger.property.slowRequest"></a>

```typescript
public readonly slowRequest: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest</a>

slow_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#slow_request LinuxWebAppSlot#slow_request}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger.property.statusCode"></a>

```typescript
public readonly statusCode: IResolvable | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a>[]

status_code block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#status_code LinuxWebAppSlot#status_code}

---

### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests: linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#count LinuxWebAppSlot#count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#interval LinuxWebAppSlot#interval}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#count LinuxWebAppSlot#count}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#interval LinuxWebAppSlot#interval}.

---

### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest: linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#count LinuxWebAppSlot#count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#interval LinuxWebAppSlot#interval}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.timeTaken">timeTaken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#time_taken LinuxWebAppSlot#time_taken}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#path LinuxWebAppSlot#path}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#count LinuxWebAppSlot#count}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#interval LinuxWebAppSlot#interval}.

---

##### `timeTaken`<sup>Required</sup> <a name="timeTaken" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.timeTaken"></a>

```typescript
public readonly timeTaken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#time_taken LinuxWebAppSlot#time_taken}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#path LinuxWebAppSlot#path}.

---

### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode: linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#count LinuxWebAppSlot#count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#interval LinuxWebAppSlot#interval}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.statusCodeRange">statusCodeRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#status_code_range LinuxWebAppSlot#status_code_range}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#path LinuxWebAppSlot#path}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.subStatus">subStatus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#sub_status LinuxWebAppSlot#sub_status}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.win32Status">win32Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#win32_status LinuxWebAppSlot#win32_status}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#count LinuxWebAppSlot#count}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#interval LinuxWebAppSlot#interval}.

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.statusCodeRange"></a>

```typescript
public readonly statusCodeRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#status_code_range LinuxWebAppSlot#status_code_range}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#path LinuxWebAppSlot#path}.

---

##### `subStatus`<sup>Optional</sup> <a name="subStatus" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.subStatus"></a>

```typescript
public readonly subStatus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#sub_status LinuxWebAppSlot#sub_status}.

---

##### `win32Status`<sup>Optional</sup> <a name="win32Status" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode.property.win32Status"></a>

```typescript
public readonly win32Status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#win32_status LinuxWebAppSlot#win32_status}.

---

### LinuxWebAppSlotSiteConfigCors <a name="LinuxWebAppSlotSiteConfigCors" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigCors: linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Specifies a list of origins that should be allowed to make cross-origin calls. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Are credentials allowed in CORS requests? Defaults to `false`. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Specifies a list of origins that should be allowed to make cross-origin calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#allowed_origins LinuxWebAppSlot#allowed_origins}

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Are credentials allowed in CORS requests? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#support_credentials LinuxWebAppSlot#support_credentials}

---

### LinuxWebAppSlotSiteConfigIpRestriction <a name="LinuxWebAppSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigIpRestriction: linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#action LinuxWebAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#headers LinuxWebAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ip_address LinuxWebAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#priority LinuxWebAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#service_tag LinuxWebAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#action LinuxWebAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | LinuxWebAppSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#headers LinuxWebAppSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ip_address LinuxWebAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#priority LinuxWebAppSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#service_tag LinuxWebAppSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}.

---

### LinuxWebAppSlotSiteConfigIpRestrictionHeaders <a name="LinuxWebAppSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigIpRestrictionHeaders: linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_azure_fdid LinuxWebAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_fd_health_probe LinuxWebAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_for LinuxWebAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_host LinuxWebAppSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_azure_fdid LinuxWebAppSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_fd_health_probe LinuxWebAppSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_for LinuxWebAppSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_host LinuxWebAppSlot#x_forwarded_host}.

---

### LinuxWebAppSlotSiteConfigScmIpRestriction <a name="LinuxWebAppSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigScmIpRestriction: linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#action LinuxWebAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#headers LinuxWebAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ip_address LinuxWebAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#priority LinuxWebAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#service_tag LinuxWebAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#action LinuxWebAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#headers LinuxWebAppSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#ip_address LinuxWebAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#priority LinuxWebAppSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#service_tag LinuxWebAppSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}.

---

### LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders <a name="LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteConfigScmIpRestrictionHeaders: linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_azure_fdid LinuxWebAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_fd_health_probe LinuxWebAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_for LinuxWebAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_host LinuxWebAppSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_azure_fdid LinuxWebAppSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_fd_health_probe LinuxWebAppSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_for LinuxWebAppSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#x_forwarded_host LinuxWebAppSlot#x_forwarded_host}.

---

### LinuxWebAppSlotSiteCredential <a name="LinuxWebAppSlotSiteCredential" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredential.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotSiteCredential: linuxWebAppSlot.LinuxWebAppSlotSiteCredential = { ... }
```


### LinuxWebAppSlotStorageAccount <a name="LinuxWebAppSlotStorageAccount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotStorageAccount: linuxWebAppSlot.LinuxWebAppSlotStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#access_key LinuxWebAppSlot#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#account_name LinuxWebAppSlot#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#share_name LinuxWebAppSlot#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#type LinuxWebAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#mount_path LinuxWebAppSlot#mount_path}. |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#access_key LinuxWebAppSlot#access_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#account_name LinuxWebAppSlot#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#name LinuxWebAppSlot#name}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#share_name LinuxWebAppSlot#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#type LinuxWebAppSlot#type}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#mount_path LinuxWebAppSlot#mount_path}.

---

### LinuxWebAppSlotTimeouts <a name="LinuxWebAppSlotTimeouts" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

const linuxWebAppSlotTimeouts: linuxWebAppSlot.LinuxWebAppSlotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#create LinuxWebAppSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#delete LinuxWebAppSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#read LinuxWebAppSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#update LinuxWebAppSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#create LinuxWebAppSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#delete LinuxWebAppSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#read LinuxWebAppSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app_slot#update LinuxWebAppSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference <a name="LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```typescript
public resetAllowedAudiences(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory">LinuxWebAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```typescript
public readonly allowedAudiencesInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory">LinuxWebAppSlotAuthSettingsActiveDirectory</a>

---


### LinuxWebAppSlotAuthSettingsFacebookOutputReference <a name="LinuxWebAppSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resetAppSecret">resetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resetAppSecretSettingName">resetAppSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSecret` <a name="resetAppSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resetAppSecret"></a>

```typescript
public resetAppSecret(): void
```

##### `resetAppSecretSettingName` <a name="resetAppSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resetAppSecretSettingName"></a>

```typescript
public resetAppSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput">appSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook">LinuxWebAppSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `appSecretSettingNameInput`<sup>Optional</sup> <a name="appSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput"></a>

```typescript
public readonly appSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `appSecretSettingName`<sup>Required</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook">LinuxWebAppSlotAuthSettingsFacebook</a>

---


### LinuxWebAppSlotAuthSettingsGithubOutputReference <a name="LinuxWebAppSlotAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub">LinuxWebAppSlotAuthSettingsGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub">LinuxWebAppSlotAuthSettingsGithub</a>

---


### LinuxWebAppSlotAuthSettingsGoogleOutputReference <a name="LinuxWebAppSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle">LinuxWebAppSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle">LinuxWebAppSlotAuthSettingsGoogle</a>

---


### LinuxWebAppSlotAuthSettingsMicrosoftOutputReference <a name="LinuxWebAppSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName"></a>

```typescript
public resetClientSecretSettingName(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft">LinuxWebAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput"></a>

```typescript
public readonly clientSecretSettingNameInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft">LinuxWebAppSlotAuthSettingsMicrosoft</a>

---


### LinuxWebAppSlotAuthSettingsOutputReference <a name="LinuxWebAppSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetAdditionalLoginParameters">resetAdditionalLoginParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: LinuxWebAppSlotAuthSettingsActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory">LinuxWebAppSlotAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putFacebook"></a>

```typescript
public putFacebook(value: LinuxWebAppSlotAuthSettingsFacebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook">LinuxWebAppSlotAuthSettingsFacebook</a>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putGithub"></a>

```typescript
public putGithub(value: LinuxWebAppSlotAuthSettingsGithub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub">LinuxWebAppSlotAuthSettingsGithub</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putGoogle"></a>

```typescript
public putGoogle(value: LinuxWebAppSlotAuthSettingsGoogle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle">LinuxWebAppSlotAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putMicrosoft"></a>

```typescript
public putMicrosoft(value: LinuxWebAppSlotAuthSettingsMicrosoft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft">LinuxWebAppSlotAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putTwitter"></a>

```typescript
public putTwitter(value: LinuxWebAppSlotAuthSettingsTwitter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter">LinuxWebAppSlotAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAdditionalLoginParameters` <a name="resetAdditionalLoginParameters" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetAdditionalLoginParameters"></a>

```typescript
public resetAdditionalLoginParameters(): void
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```typescript
public resetAllowedExternalRedirectUrls(): void
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```typescript
public resetDefaultProvider(): void
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetFacebook"></a>

```typescript
public resetFacebook(): void
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetGithub"></a>

```typescript
public resetGithub(): void
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetGoogle"></a>

```typescript
public resetGoogle(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```typescript
public resetMicrosoft(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```typescript
public resetTokenRefreshExtensionHours(): void
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```typescript
public resetTokenStoreEnabled(): void
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetTwitter"></a>

```typescript
public resetTwitter(): void
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```typescript
public resetUnauthenticatedClientAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference">LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference">LinuxWebAppSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference">LinuxWebAppSlotAuthSettingsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference">LinuxWebAppSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference">LinuxWebAppSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference">LinuxWebAppSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory">LinuxWebAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.additionalLoginParametersInput">additionalLoginParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook">LinuxWebAppSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.githubInput">githubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub">LinuxWebAppSlotAuthSettingsGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle">LinuxWebAppSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft">LinuxWebAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter">LinuxWebAppSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings">LinuxWebAppSlotAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference">LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.facebook"></a>

```typescript
public readonly facebook: LinuxWebAppSlotAuthSettingsFacebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebookOutputReference">LinuxWebAppSlotAuthSettingsFacebookOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.github"></a>

```typescript
public readonly github: LinuxWebAppSlotAuthSettingsGithubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithubOutputReference">LinuxWebAppSlotAuthSettingsGithubOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.google"></a>

```typescript
public readonly google: LinuxWebAppSlotAuthSettingsGoogleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogleOutputReference">LinuxWebAppSlotAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.microsoft"></a>

```typescript
public readonly microsoft: LinuxWebAppSlotAuthSettingsMicrosoftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoftOutputReference">LinuxWebAppSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.twitter"></a>

```typescript
public readonly twitter: LinuxWebAppSlotAuthSettingsTwitterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference">LinuxWebAppSlotAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: LinuxWebAppSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsActiveDirectory">LinuxWebAppSlotAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParametersInput`<sup>Optional</sup> <a name="additionalLoginParametersInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.additionalLoginParametersInput"></a>

```typescript
public readonly additionalLoginParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```typescript
public readonly allowedExternalRedirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```typescript
public readonly defaultProviderInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.facebookInput"></a>

```typescript
public readonly facebookInput: LinuxWebAppSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsFacebook">LinuxWebAppSlotAuthSettingsFacebook</a>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.githubInput"></a>

```typescript
public readonly githubInput: LinuxWebAppSlotAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGithub">LinuxWebAppSlotAuthSettingsGithub</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.googleInput"></a>

```typescript
public readonly googleInput: LinuxWebAppSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsGoogle">LinuxWebAppSlotAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```typescript
public readonly microsoftInput: LinuxWebAppSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsMicrosoft">LinuxWebAppSlotAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```typescript
public readonly tokenRefreshExtensionHoursInput: number;
```

- *Type:* number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```typescript
public readonly tokenStoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.twitterInput"></a>

```typescript
public readonly twitterInput: LinuxWebAppSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter">LinuxWebAppSlotAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```typescript
public readonly unauthenticatedClientActionInput: string;
```

- *Type:* string

---

##### `additionalLoginParameters`<sup>Required</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```typescript
public readonly additionalLoginParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettings">LinuxWebAppSlotAuthSettings</a>

---


### LinuxWebAppSlotAuthSettingsTwitterOutputReference <a name="LinuxWebAppSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecret">resetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName">resetConsumerSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerSecret` <a name="resetConsumerSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecret"></a>

```typescript
public resetConsumerSecret(): void
```

##### `resetConsumerSecretSettingName` <a name="resetConsumerSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName"></a>

```typescript
public resetConsumerSecretSettingName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput">consumerSecretSettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter">LinuxWebAppSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```typescript
public readonly consumerKeyInput: string;
```

- *Type:* string

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```typescript
public readonly consumerSecretInput: string;
```

- *Type:* string

---

##### `consumerSecretSettingNameInput`<sup>Optional</sup> <a name="consumerSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput"></a>

```typescript
public readonly consumerSecretSettingNameInput: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `consumerSecretSettingName`<sup>Required</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotAuthSettingsTwitter">LinuxWebAppSlotAuthSettingsTwitter</a>

---


### LinuxWebAppSlotBackupOutputReference <a name="LinuxWebAppSlotBackupOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: LinuxWebAppSlotBackupSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule">LinuxWebAppSlotBackupSchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference">LinuxWebAppSlotBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule">LinuxWebAppSlotBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.storageAccountUrlInput">storageAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup">LinuxWebAppSlotBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.schedule"></a>

```typescript
public readonly schedule: LinuxWebAppSlotBackupScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference">LinuxWebAppSlotBackupScheduleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: LinuxWebAppSlotBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule">LinuxWebAppSlotBackupSchedule</a>

---

##### `storageAccountUrlInput`<sup>Optional</sup> <a name="storageAccountUrlInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.storageAccountUrlInput"></a>

```typescript
public readonly storageAccountUrlInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackup">LinuxWebAppSlotBackup</a>

---


### LinuxWebAppSlotBackupScheduleOutputReference <a name="LinuxWebAppSlotBackupScheduleOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resetKeepAtLeastOneBackup">resetKeepAtLeastOneBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepAtLeastOneBackup` <a name="resetKeepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```typescript
public resetKeepAtLeastOneBackup(): void
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resetRetentionPeriodDays"></a>

```typescript
public resetRetentionPeriodDays(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.lastExecutionTime">lastExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyUnitInput">frequencyUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">keepAtLeastOneBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule">LinuxWebAppSlotBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastExecutionTime`<sup>Required</sup> <a name="lastExecutionTime" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.lastExecutionTime"></a>

```typescript
public readonly lastExecutionTime: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `frequencyUnitInput`<sup>Optional</sup> <a name="frequencyUnitInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```typescript
public readonly frequencyUnitInput: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackupInput`<sup>Optional</sup> <a name="keepAtLeastOneBackupInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```typescript
public readonly keepAtLeastOneBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.retentionPeriodDaysInput"></a>

```typescript
public readonly retentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackup`<sup>Required</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotBackupSchedule">LinuxWebAppSlotBackupSchedule</a>

---


### LinuxWebAppSlotConnectionStringList <a name="LinuxWebAppSlotConnectionStringList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LinuxWebAppSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a>[]

---


### LinuxWebAppSlotConnectionStringOutputReference <a name="LinuxWebAppSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotConnectionString | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotConnectionString">LinuxWebAppSlotConnectionString</a> | cdktf.IResolvable

---


### LinuxWebAppSlotIdentityOutputReference <a name="LinuxWebAppSlotIdentityOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity">LinuxWebAppSlotIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotIdentity">LinuxWebAppSlotIdentity</a>

---


### LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference <a name="LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```typescript
public readonly sasUrlInput: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage</a>

---


### LinuxWebAppSlotLogsApplicationLogsOutputReference <a name="LinuxWebAppSlotLogsApplicationLogsOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.putAzureBlobStorage"></a>

```typescript
public putAzureBlobStorage(value: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage"></a>

```typescript
public resetAzureBlobStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput">fileSystemLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.fileSystemLevel">fileSystemLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs">LinuxWebAppSlotLogsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput"></a>

```typescript
public readonly azureBlobStorageInput: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage">LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage</a>

---

##### `fileSystemLevelInput`<sup>Optional</sup> <a name="fileSystemLevelInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput"></a>

```typescript
public readonly fileSystemLevelInput: string;
```

- *Type:* string

---

##### `fileSystemLevel`<sup>Required</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.fileSystemLevel"></a>

```typescript
public readonly fileSystemLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs">LinuxWebAppSlotLogsApplicationLogs</a>

---


### LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference <a name="LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage">LinuxWebAppSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```typescript
public readonly sasUrlInput: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage">LinuxWebAppSlotLogsHttpLogsAzureBlobStorage</a>

---


### LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference <a name="LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput">retentionInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb">retentionInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem">LinuxWebAppSlotLogsHttpLogsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `retentionInMbInput`<sup>Optional</sup> <a name="retentionInMbInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput"></a>

```typescript
public readonly retentionInMbInput: number;
```

- *Type:* number

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb"></a>

```typescript
public readonly retentionInMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem">LinuxWebAppSlotLogsHttpLogsFileSystem</a>

---


### LinuxWebAppSlotLogsHttpLogsOutputReference <a name="LinuxWebAppSlotLogsHttpLogsOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.putFileSystem">putFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.resetFileSystem">resetFileSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.putAzureBlobStorage"></a>

```typescript
public putAzureBlobStorage(value: LinuxWebAppSlotLogsHttpLogsAzureBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage">LinuxWebAppSlotLogsHttpLogsAzureBlobStorage</a>

---

##### `putFileSystem` <a name="putFileSystem" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.putFileSystem"></a>

```typescript
public putFileSystem(value: LinuxWebAppSlotLogsHttpLogsFileSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.putFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem">LinuxWebAppSlotLogsHttpLogsFileSystem</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.resetAzureBlobStorage"></a>

```typescript
public resetAzureBlobStorage(): void
```

##### `resetFileSystem` <a name="resetFileSystem" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.resetFileSystem"></a>

```typescript
public resetFileSystem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference">LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference">LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage">LinuxWebAppSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.fileSystemInput">fileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem">LinuxWebAppSlotLogsHttpLogsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs">LinuxWebAppSlotLogsHttpLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference">LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference</a>

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.fileSystem"></a>

```typescript
public readonly fileSystem: LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference">LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput"></a>

```typescript
public readonly azureBlobStorageInput: LinuxWebAppSlotLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsAzureBlobStorage">LinuxWebAppSlotLogsHttpLogsAzureBlobStorage</a>

---

##### `fileSystemInput`<sup>Optional</sup> <a name="fileSystemInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.fileSystemInput"></a>

```typescript
public readonly fileSystemInput: LinuxWebAppSlotLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsFileSystem">LinuxWebAppSlotLogsHttpLogsFileSystem</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs">LinuxWebAppSlotLogsHttpLogs</a>

---


### LinuxWebAppSlotLogsOutputReference <a name="LinuxWebAppSlotLogsOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.putApplicationLogs">putApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.putHttpLogs">putHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetApplicationLogs">resetApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetDetailedErrorMessages">resetDetailedErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetFailedRequestTracing">resetFailedRequestTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetHttpLogs">resetHttpLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationLogs` <a name="putApplicationLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.putApplicationLogs"></a>

```typescript
public putApplicationLogs(value: LinuxWebAppSlotLogsApplicationLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs">LinuxWebAppSlotLogsApplicationLogs</a>

---

##### `putHttpLogs` <a name="putHttpLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.putHttpLogs"></a>

```typescript
public putHttpLogs(value: LinuxWebAppSlotLogsHttpLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.putHttpLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs">LinuxWebAppSlotLogsHttpLogs</a>

---

##### `resetApplicationLogs` <a name="resetApplicationLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetApplicationLogs"></a>

```typescript
public resetApplicationLogs(): void
```

##### `resetDetailedErrorMessages` <a name="resetDetailedErrorMessages" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetDetailedErrorMessages"></a>

```typescript
public resetDetailedErrorMessages(): void
```

##### `resetFailedRequestTracing` <a name="resetFailedRequestTracing" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetFailedRequestTracing"></a>

```typescript
public resetFailedRequestTracing(): void
```

##### `resetHttpLogs` <a name="resetHttpLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.resetHttpLogs"></a>

```typescript
public resetHttpLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference">LinuxWebAppSlotLogsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference">LinuxWebAppSlotLogsHttpLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.applicationLogsInput">applicationLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs">LinuxWebAppSlotLogsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.detailedErrorMessagesInput">detailedErrorMessagesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.failedRequestTracingInput">failedRequestTracingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.httpLogsInput">httpLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs">LinuxWebAppSlotLogsHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.detailedErrorMessages">detailedErrorMessages</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.failedRequestTracing">failedRequestTracing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs">LinuxWebAppSlotLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: LinuxWebAppSlotLogsApplicationLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogsOutputReference">LinuxWebAppSlotLogsApplicationLogsOutputReference</a>

---

##### `httpLogs`<sup>Required</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.httpLogs"></a>

```typescript
public readonly httpLogs: LinuxWebAppSlotLogsHttpLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogsOutputReference">LinuxWebAppSlotLogsHttpLogsOutputReference</a>

---

##### `applicationLogsInput`<sup>Optional</sup> <a name="applicationLogsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.applicationLogsInput"></a>

```typescript
public readonly applicationLogsInput: LinuxWebAppSlotLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsApplicationLogs">LinuxWebAppSlotLogsApplicationLogs</a>

---

##### `detailedErrorMessagesInput`<sup>Optional</sup> <a name="detailedErrorMessagesInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.detailedErrorMessagesInput"></a>

```typescript
public readonly detailedErrorMessagesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedRequestTracingInput`<sup>Optional</sup> <a name="failedRequestTracingInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.failedRequestTracingInput"></a>

```typescript
public readonly failedRequestTracingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpLogsInput`<sup>Optional</sup> <a name="httpLogsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.httpLogsInput"></a>

```typescript
public readonly httpLogsInput: LinuxWebAppSlotLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsHttpLogs">LinuxWebAppSlotLogsHttpLogs</a>

---

##### `detailedErrorMessages`<sup>Required</sup> <a name="detailedErrorMessages" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.detailedErrorMessages"></a>

```typescript
public readonly detailedErrorMessages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedRequestTracing`<sup>Required</sup> <a name="failedRequestTracing" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.failedRequestTracing"></a>

```typescript
public readonly failedRequestTracing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotLogs">LinuxWebAppSlotLogs</a>

---


### LinuxWebAppSlotSiteConfigApplicationStackOutputReference <a name="LinuxWebAppSlotSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetDockerImage">resetDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetDockerImageTag">resetDockerImageTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetDotnetVersion">resetDotnetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetGoVersion">resetGoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetJavaServer">resetJavaServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetJavaServerVersion">resetJavaServerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetNodeVersion">resetNodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetPhpVersion">resetPhpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetRubyVersion">resetRubyVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDockerImage` <a name="resetDockerImage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetDockerImage"></a>

```typescript
public resetDockerImage(): void
```

##### `resetDockerImageTag` <a name="resetDockerImageTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetDockerImageTag"></a>

```typescript
public resetDockerImageTag(): void
```

##### `resetDotnetVersion` <a name="resetDotnetVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetDotnetVersion"></a>

```typescript
public resetDotnetVersion(): void
```

##### `resetGoVersion` <a name="resetGoVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetGoVersion"></a>

```typescript
public resetGoVersion(): void
```

##### `resetJavaServer` <a name="resetJavaServer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetJavaServer"></a>

```typescript
public resetJavaServer(): void
```

##### `resetJavaServerVersion` <a name="resetJavaServerVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetJavaServerVersion"></a>

```typescript
public resetJavaServerVersion(): void
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetJavaVersion"></a>

```typescript
public resetJavaVersion(): void
```

##### `resetNodeVersion` <a name="resetNodeVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetNodeVersion"></a>

```typescript
public resetNodeVersion(): void
```

##### `resetPhpVersion` <a name="resetPhpVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetPhpVersion"></a>

```typescript
public resetPhpVersion(): void
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetPythonVersion"></a>

```typescript
public resetPythonVersion(): void
```

##### `resetRubyVersion` <a name="resetRubyVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.resetRubyVersion"></a>

```typescript
public resetRubyVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImageInput">dockerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImageTagInput">dockerImageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersionInput">dotnetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.goVersionInput">goVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServerInput">javaServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServerVersionInput">javaServerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersionInput">nodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.phpVersionInput">phpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.rubyVersionInput">rubyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImage">dockerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImageTag">dockerImageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersion">dotnetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.goVersion">goVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServer">javaServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServerVersion">javaServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.phpVersion">phpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack">LinuxWebAppSlotSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dockerImageInput`<sup>Optional</sup> <a name="dockerImageInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImageInput"></a>

```typescript
public readonly dockerImageInput: string;
```

- *Type:* string

---

##### `dockerImageTagInput`<sup>Optional</sup> <a name="dockerImageTagInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImageTagInput"></a>

```typescript
public readonly dockerImageTagInput: string;
```

- *Type:* string

---

##### `dotnetVersionInput`<sup>Optional</sup> <a name="dotnetVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersionInput"></a>

```typescript
public readonly dotnetVersionInput: string;
```

- *Type:* string

---

##### `goVersionInput`<sup>Optional</sup> <a name="goVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.goVersionInput"></a>

```typescript
public readonly goVersionInput: string;
```

- *Type:* string

---

##### `javaServerInput`<sup>Optional</sup> <a name="javaServerInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServerInput"></a>

```typescript
public readonly javaServerInput: string;
```

- *Type:* string

---

##### `javaServerVersionInput`<sup>Optional</sup> <a name="javaServerVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServerVersionInput"></a>

```typescript
public readonly javaServerVersionInput: string;
```

- *Type:* string

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `nodeVersionInput`<sup>Optional</sup> <a name="nodeVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersionInput"></a>

```typescript
public readonly nodeVersionInput: string;
```

- *Type:* string

---

##### `phpVersionInput`<sup>Optional</sup> <a name="phpVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.phpVersionInput"></a>

```typescript
public readonly phpVersionInput: string;
```

- *Type:* string

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.pythonVersionInput"></a>

```typescript
public readonly pythonVersionInput: string;
```

- *Type:* string

---

##### `rubyVersionInput`<sup>Optional</sup> <a name="rubyVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.rubyVersionInput"></a>

```typescript
public readonly rubyVersionInput: string;
```

- *Type:* string

---

##### `dockerImage`<sup>Required</sup> <a name="dockerImage" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImage"></a>

```typescript
public readonly dockerImage: string;
```

- *Type:* string

---

##### `dockerImageTag`<sup>Required</sup> <a name="dockerImageTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dockerImageTag"></a>

```typescript
public readonly dockerImageTag: string;
```

- *Type:* string

---

##### `dotnetVersion`<sup>Required</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```typescript
public readonly dotnetVersion: string;
```

- *Type:* string

---

##### `goVersion`<sup>Required</sup> <a name="goVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.goVersion"></a>

```typescript
public readonly goVersion: string;
```

- *Type:* string

---

##### `javaServer`<sup>Required</sup> <a name="javaServer" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServer"></a>

```typescript
public readonly javaServer: string;
```

- *Type:* string

---

##### `javaServerVersion`<sup>Required</sup> <a name="javaServerVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaServerVersion"></a>

```typescript
public readonly javaServerVersion: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

---

##### `phpVersion`<sup>Required</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.phpVersion"></a>

```typescript
public readonly phpVersion: string;
```

- *Type:* string

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `rubyVersion`<sup>Required</sup> <a name="rubyVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack">LinuxWebAppSlotSiteConfigApplicationStack</a>

---


### LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference <a name="LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.resetMinimumProcessExecutionTime">resetMinimumProcessExecutionTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumProcessExecutionTime` <a name="resetMinimumProcessExecutionTime" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.resetMinimumProcessExecutionTime"></a>

```typescript
public resetMinimumProcessExecutionTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTimeInput">minimumProcessExecutionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTime">minimumProcessExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction">LinuxWebAppSlotSiteConfigAutoHealSettingAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `minimumProcessExecutionTimeInput`<sup>Optional</sup> <a name="minimumProcessExecutionTimeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTimeInput"></a>

```typescript
public readonly minimumProcessExecutionTimeInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `minimumProcessExecutionTime`<sup>Required</sup> <a name="minimumProcessExecutionTime" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTime"></a>

```typescript
public readonly minimumProcessExecutionTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigAutoHealSettingAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction">LinuxWebAppSlotSiteConfigAutoHealSettingAction</a>

---


### LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference <a name="LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.putAction"></a>

```typescript
public putAction(value: LinuxWebAppSlotSiteConfigAutoHealSettingAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction">LinuxWebAppSlotSiteConfigAutoHealSettingAction</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: LinuxWebAppSlotSiteConfigAutoHealSettingTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger">LinuxWebAppSlotSiteConfigAutoHealSettingTrigger</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction">LinuxWebAppSlotSiteConfigAutoHealSettingAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger">LinuxWebAppSlotSiteConfigAutoHealSettingTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting">LinuxWebAppSlotSiteConfigAutoHealSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.action"></a>

```typescript
public readonly action: LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.trigger"></a>

```typescript
public readonly trigger: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: LinuxWebAppSlotSiteConfigAutoHealSettingAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingAction">LinuxWebAppSlotSiteConfigAutoHealSettingAction</a>

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: LinuxWebAppSlotSiteConfigAutoHealSettingTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger">LinuxWebAppSlotSiteConfigAutoHealSettingTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigAutoHealSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting">LinuxWebAppSlotSiteConfigAutoHealSetting</a>

---


### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putRequests">putRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putSlowRequest">putSlowRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putStatusCode">putStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resetSlowRequest">resetSlowRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequests` <a name="putRequests" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putRequests"></a>

```typescript
public putRequests(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putRequests.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests</a>

---

##### `putSlowRequest` <a name="putSlowRequest" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putSlowRequest"></a>

```typescript
public putSlowRequest(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putSlowRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest</a>

---

##### `putStatusCode` <a name="putStatusCode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putStatusCode"></a>

```typescript
public putStatusCode(value: IResolvable | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.putStatusCode.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a>[]

---

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetSlowRequest` <a name="resetSlowRequest" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resetSlowRequest"></a>

```typescript
public resetSlowRequest(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequest">slowRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.statusCode">statusCode</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.requestsInput">requestsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequestInput">slowRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger">LinuxWebAppSlotSiteConfigAutoHealSettingTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.requests"></a>

```typescript
public readonly requests: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference</a>

---

##### `slowRequest`<sup>Required</sup> <a name="slowRequest" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequest"></a>

```typescript
public readonly slowRequest: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference</a>

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList</a>

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests</a>

---

##### `slowRequestInput`<sup>Optional</sup> <a name="slowRequestInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequestInput"></a>

```typescript
public readonly slowRequestInput: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest</a>

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: IResolvable | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigAutoHealSettingTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTrigger">LinuxWebAppSlotSiteConfigAutoHealSettingTrigger</a>

---


### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests</a>

---


### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTakenInput">timeTakenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTaken">timeTaken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `timeTakenInput`<sup>Optional</sup> <a name="timeTakenInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTakenInput"></a>

```typescript
public readonly timeTakenInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `timeTaken`<sup>Required</sup> <a name="timeTaken" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTaken"></a>

```typescript
public readonly timeTaken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest</a>

---


### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a>[]

---


### LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference <a name="LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetSubStatus">resetSubStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetWin32Status">resetWin32Status</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSubStatus` <a name="resetSubStatus" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetSubStatus"></a>

```typescript
public resetSubStatus(): void
```

##### `resetWin32Status` <a name="resetWin32Status" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetWin32Status"></a>

```typescript
public resetWin32Status(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRangeInput">statusCodeRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatusInput">subStatusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32StatusInput">win32StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRange">statusCodeRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatus">subStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32Status">win32Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `statusCodeRangeInput`<sup>Optional</sup> <a name="statusCodeRangeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRangeInput"></a>

```typescript
public readonly statusCodeRangeInput: string;
```

- *Type:* string

---

##### `subStatusInput`<sup>Optional</sup> <a name="subStatusInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatusInput"></a>

```typescript
public readonly subStatusInput: number;
```

- *Type:* number

---

##### `win32StatusInput`<sup>Optional</sup> <a name="win32StatusInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32StatusInput"></a>

```typescript
public readonly win32StatusInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRange"></a>

```typescript
public readonly statusCodeRange: string;
```

- *Type:* string

---

##### `subStatus`<sup>Required</sup> <a name="subStatus" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatus"></a>

```typescript
public readonly subStatus: number;
```

- *Type:* number

---

##### `win32Status`<sup>Required</sup> <a name="win32Status" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32Status"></a>

```typescript
public readonly win32Status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode</a> | cdktf.IResolvable

---


### LinuxWebAppSlotSiteConfigCorsOutputReference <a name="LinuxWebAppSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```typescript
public resetSupportCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors">LinuxWebAppSlotSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```typescript
public readonly supportCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors">LinuxWebAppSlotSiteConfigCors</a>

---


### LinuxWebAppSlotSiteConfigIpRestrictionHeadersList <a name="LinuxWebAppSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LinuxWebAppSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a>[]

---


### LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference <a name="LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigIpRestrictionHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a> | cdktf.IResolvable

---


### LinuxWebAppSlotSiteConfigIpRestrictionList <a name="LinuxWebAppSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LinuxWebAppSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a>[]

---


### LinuxWebAppSlotSiteConfigIpRestrictionOutputReference <a name="LinuxWebAppSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | LinuxWebAppSlotSiteConfigIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList">LinuxWebAppSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: LinuxWebAppSlotSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeadersList">LinuxWebAppSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | LinuxWebAppSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionHeaders">LinuxWebAppSlotSiteConfigIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigIpRestriction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a> | cdktf.IResolvable

---


### LinuxWebAppSlotSiteConfigOutputReference <a name="LinuxWebAppSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putApplicationStack">putApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putAutoHealSetting">putAutoHealSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetApiDefinitionUrl">resetApiDefinitionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetApiManagementApiId">resetApiManagementApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAppCommandLine">resetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetApplicationStack">resetApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAutoHealEnabled">resetAutoHealEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAutoHealSetting">resetAutoHealSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAutoSwapSlotName">resetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetContainerRegistryManagedIdentityClientId">resetContainerRegistryManagedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetContainerRegistryUseManagedIdentity">resetContainerRegistryUseManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetDefaultDocuments">resetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin">resetHealthCheckEvictionTimeInMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetLoadBalancingMode">resetLoadBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetLocalMysqlEnabled">resetLocalMysqlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetManagedPipelineMode">resetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled">resetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetRemoteDebuggingVersion">resetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetScmMinimumTlsVersion">resetScmMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetUse32BitWorker">resetUse32BitWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationStack` <a name="putApplicationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putApplicationStack"></a>

```typescript
public putApplicationStack(value: LinuxWebAppSlotSiteConfigApplicationStack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putApplicationStack.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack">LinuxWebAppSlotSiteConfigApplicationStack</a>

---

##### `putAutoHealSetting` <a name="putAutoHealSetting" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putAutoHealSetting"></a>

```typescript
public putAutoHealSetting(value: LinuxWebAppSlotSiteConfigAutoHealSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putAutoHealSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting">LinuxWebAppSlotSiteConfigAutoHealSetting</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putCors"></a>

```typescript
public putCors(value: LinuxWebAppSlotSiteConfigCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors">LinuxWebAppSlotSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putIpRestriction"></a>

```typescript
public putIpRestriction(value: IResolvable | LinuxWebAppSlotSiteConfigIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a>[]

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```typescript
public putScmIpRestriction(value: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a>[]

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```typescript
public resetAlwaysOn(): void
```

##### `resetApiDefinitionUrl` <a name="resetApiDefinitionUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetApiDefinitionUrl"></a>

```typescript
public resetApiDefinitionUrl(): void
```

##### `resetApiManagementApiId` <a name="resetApiManagementApiId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetApiManagementApiId"></a>

```typescript
public resetApiManagementApiId(): void
```

##### `resetAppCommandLine` <a name="resetAppCommandLine" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAppCommandLine"></a>

```typescript
public resetAppCommandLine(): void
```

##### `resetApplicationStack` <a name="resetApplicationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetApplicationStack"></a>

```typescript
public resetApplicationStack(): void
```

##### `resetAutoHealEnabled` <a name="resetAutoHealEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAutoHealEnabled"></a>

```typescript
public resetAutoHealEnabled(): void
```

##### `resetAutoHealSetting` <a name="resetAutoHealSetting" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAutoHealSetting"></a>

```typescript
public resetAutoHealSetting(): void
```

##### `resetAutoSwapSlotName` <a name="resetAutoSwapSlotName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```typescript
public resetAutoSwapSlotName(): void
```

##### `resetContainerRegistryManagedIdentityClientId` <a name="resetContainerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetContainerRegistryManagedIdentityClientId"></a>

```typescript
public resetContainerRegistryManagedIdentityClientId(): void
```

##### `resetContainerRegistryUseManagedIdentity` <a name="resetContainerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetContainerRegistryUseManagedIdentity"></a>

```typescript
public resetContainerRegistryUseManagedIdentity(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetDefaultDocuments` <a name="resetDefaultDocuments" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetDefaultDocuments"></a>

```typescript
public resetDefaultDocuments(): void
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetFtpsState"></a>

```typescript
public resetFtpsState(): void
```

##### `resetHealthCheckEvictionTimeInMin` <a name="resetHealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin"></a>

```typescript
public resetHealthCheckEvictionTimeInMin(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetIpRestriction"></a>

```typescript
public resetIpRestriction(): void
```

##### `resetLoadBalancingMode` <a name="resetLoadBalancingMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetLoadBalancingMode"></a>

```typescript
public resetLoadBalancingMode(): void
```

##### `resetLocalMysqlEnabled` <a name="resetLocalMysqlEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetLocalMysqlEnabled"></a>

```typescript
public resetLocalMysqlEnabled(): void
```

##### `resetManagedPipelineMode` <a name="resetManagedPipelineMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetManagedPipelineMode"></a>

```typescript
public resetManagedPipelineMode(): void
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetMinimumTlsVersion"></a>

```typescript
public resetMinimumTlsVersion(): void
```

##### `resetRemoteDebuggingEnabled` <a name="resetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```typescript
public resetRemoteDebuggingEnabled(): void
```

##### `resetRemoteDebuggingVersion` <a name="resetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```typescript
public resetRemoteDebuggingVersion(): void
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```typescript
public resetScmIpRestriction(): void
```

##### `resetScmMinimumTlsVersion` <a name="resetScmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetScmMinimumTlsVersion"></a>

```typescript
public resetScmMinimumTlsVersion(): void
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```typescript
public resetScmUseMainIpRestriction(): void
```

##### `resetUse32BitWorker` <a name="resetUse32BitWorker" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetUse32BitWorker"></a>

```typescript
public resetUse32BitWorker(): void
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```typescript
public resetVnetRouteAllEnabled(): void
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```typescript
public resetWebsocketsEnabled(): void
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.resetWorkerCount"></a>

```typescript
public resetWorkerCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference">LinuxWebAppSlotSiteConfigApplicationStackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealSetting">autoHealSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference">LinuxWebAppSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.detailedErrorLoggingEnabled">detailedErrorLoggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList">LinuxWebAppSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList">LinuxWebAppSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiDefinitionUrlInput">apiDefinitionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiManagementApiIdInput">apiManagementApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.appCommandLineInput">appCommandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.applicationStackInput">applicationStackInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack">LinuxWebAppSlotSiteConfigApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealEnabledInput">autoHealEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealSettingInput">autoHealSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting">LinuxWebAppSlotSiteConfigAutoHealSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">autoSwapSlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryManagedIdentityClientIdInput">containerRegistryManagedIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryUseManagedIdentityInput">containerRegistryUseManagedIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors">LinuxWebAppSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.defaultDocumentsInput">defaultDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput">healthCheckEvictionTimeInMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.loadBalancingModeInput">loadBalancingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.localMysqlEnabledInput">localMysqlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.managedPipelineModeInput">managedPipelineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remoteDebuggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput">remoteDebuggingVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersionInput">scmMinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.use32BitWorkerInput">use32BitWorkerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiManagementApiId">apiManagementApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealEnabled">autoHealEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId">containerRegistryManagedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryUseManagedIdentity">containerRegistryUseManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.loadBalancingMode">loadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.use32BitWorker">use32BitWorker</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig">LinuxWebAppSlotSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationStack`<sup>Required</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.applicationStack"></a>

```typescript
public readonly applicationStack: LinuxWebAppSlotSiteConfigApplicationStackOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStackOutputReference">LinuxWebAppSlotSiteConfigApplicationStackOutputReference</a>

---

##### `autoHealSetting`<sup>Required</sup> <a name="autoHealSetting" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealSetting"></a>

```typescript
public readonly autoHealSetting: LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference">LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: LinuxWebAppSlotSiteConfigCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCorsOutputReference">LinuxWebAppSlotSiteConfigCorsOutputReference</a>

---

##### `detailedErrorLoggingEnabled`<sup>Required</sup> <a name="detailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```typescript
public readonly detailedErrorLoggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: LinuxWebAppSlotSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestrictionList">LinuxWebAppSlotSiteConfigIpRestrictionList</a>

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: LinuxWebAppSlotSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList">LinuxWebAppSlotSiteConfigScmIpRestrictionList</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```typescript
public readonly alwaysOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiDefinitionUrlInput`<sup>Optional</sup> <a name="apiDefinitionUrlInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiDefinitionUrlInput"></a>

```typescript
public readonly apiDefinitionUrlInput: string;
```

- *Type:* string

---

##### `apiManagementApiIdInput`<sup>Optional</sup> <a name="apiManagementApiIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiManagementApiIdInput"></a>

```typescript
public readonly apiManagementApiIdInput: string;
```

- *Type:* string

---

##### `appCommandLineInput`<sup>Optional</sup> <a name="appCommandLineInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.appCommandLineInput"></a>

```typescript
public readonly appCommandLineInput: string;
```

- *Type:* string

---

##### `applicationStackInput`<sup>Optional</sup> <a name="applicationStackInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.applicationStackInput"></a>

```typescript
public readonly applicationStackInput: LinuxWebAppSlotSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigApplicationStack">LinuxWebAppSlotSiteConfigApplicationStack</a>

---

##### `autoHealEnabledInput`<sup>Optional</sup> <a name="autoHealEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealEnabledInput"></a>

```typescript
public readonly autoHealEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealSettingInput`<sup>Optional</sup> <a name="autoHealSettingInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealSettingInput"></a>

```typescript
public readonly autoHealSettingInput: LinuxWebAppSlotSiteConfigAutoHealSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigAutoHealSetting">LinuxWebAppSlotSiteConfigAutoHealSetting</a>

---

##### `autoSwapSlotNameInput`<sup>Optional</sup> <a name="autoSwapSlotNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```typescript
public readonly autoSwapSlotNameInput: string;
```

- *Type:* string

---

##### `containerRegistryManagedIdentityClientIdInput`<sup>Optional</sup> <a name="containerRegistryManagedIdentityClientIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryManagedIdentityClientIdInput"></a>

```typescript
public readonly containerRegistryManagedIdentityClientIdInput: string;
```

- *Type:* string

---

##### `containerRegistryUseManagedIdentityInput`<sup>Optional</sup> <a name="containerRegistryUseManagedIdentityInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryUseManagedIdentityInput"></a>

```typescript
public readonly containerRegistryUseManagedIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.corsInput"></a>

```typescript
public readonly corsInput: LinuxWebAppSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigCors">LinuxWebAppSlotSiteConfigCors</a>

---

##### `defaultDocumentsInput`<sup>Optional</sup> <a name="defaultDocumentsInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```typescript
public readonly defaultDocumentsInput: string[];
```

- *Type:* string[]

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```typescript
public readonly ftpsStateInput: string;
```

- *Type:* string

---

##### `healthCheckEvictionTimeInMinInput`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMinInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput"></a>

```typescript
public readonly healthCheckEvictionTimeInMinInput: number;
```

- *Type:* number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```typescript
public readonly ipRestrictionInput: IResolvable | LinuxWebAppSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigIpRestriction">LinuxWebAppSlotSiteConfigIpRestriction</a>[]

---

##### `loadBalancingModeInput`<sup>Optional</sup> <a name="loadBalancingModeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.loadBalancingModeInput"></a>

```typescript
public readonly loadBalancingModeInput: string;
```

- *Type:* string

---

##### `localMysqlEnabledInput`<sup>Optional</sup> <a name="localMysqlEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.localMysqlEnabledInput"></a>

```typescript
public readonly localMysqlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedPipelineModeInput`<sup>Optional</sup> <a name="managedPipelineModeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```typescript
public readonly managedPipelineModeInput: string;
```

- *Type:* string

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.minimumTlsVersionInput"></a>

```typescript
public readonly minimumTlsVersionInput: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabledInput`<sup>Optional</sup> <a name="remoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```typescript
public readonly remoteDebuggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersionInput`<sup>Optional</sup> <a name="remoteDebuggingVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```typescript
public readonly remoteDebuggingVersionInput: string;
```

- *Type:* string

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```typescript
public readonly scmIpRestrictionInput: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a>[]

---

##### `scmMinimumTlsVersionInput`<sup>Optional</sup> <a name="scmMinimumTlsVersionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersionInput"></a>

```typescript
public readonly scmMinimumTlsVersionInput: string;
```

- *Type:* string

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```typescript
public readonly scmUseMainIpRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerInput`<sup>Optional</sup> <a name="use32BitWorkerInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.use32BitWorkerInput"></a>

```typescript
public readonly use32BitWorkerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```typescript
public readonly vnetRouteAllEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```typescript
public readonly websocketsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.workerCountInput"></a>

```typescript
public readonly workerCountInput: number;
```

- *Type:* number

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiDefinitionUrl`<sup>Required</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```typescript
public readonly apiDefinitionUrl: string;
```

- *Type:* string

---

##### `apiManagementApiId`<sup>Required</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.apiManagementApiId"></a>

```typescript
public readonly apiManagementApiId: string;
```

- *Type:* string

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

---

##### `autoHealEnabled`<sup>Required</sup> <a name="autoHealEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoHealEnabled"></a>

```typescript
public readonly autoHealEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

---

##### `containerRegistryManagedIdentityClientId`<sup>Required</sup> <a name="containerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId"></a>

```typescript
public readonly containerRegistryManagedIdentityClientId: string;
```

- *Type:* string

---

##### `containerRegistryUseManagedIdentity`<sup>Required</sup> <a name="containerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.containerRegistryUseManagedIdentity"></a>

```typescript
public readonly containerRegistryUseManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckEvictionTimeInMin`<sup>Required</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```typescript
public readonly healthCheckEvictionTimeInMin: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancingMode`<sup>Required</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.loadBalancingMode"></a>

```typescript
public readonly loadBalancingMode: string;
```

- *Type:* string

---

##### `localMysqlEnabled`<sup>Required</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.localMysqlEnabled"></a>

```typescript
public readonly localMysqlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

---

##### `scmMinimumTlsVersion`<sup>Required</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```typescript
public readonly scmMinimumTlsVersion: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorker`<sup>Required</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.use32BitWorker"></a>

```typescript
public readonly use32BitWorker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfig">LinuxWebAppSlotSiteConfig</a>

---


### LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList <a name="LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

---


### LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a> | cdktf.IResolvable

---


### LinuxWebAppSlotSiteConfigScmIpRestrictionList <a name="LinuxWebAppSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a>[]

---


### LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference <a name="LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList">LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList">LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders">LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteConfigScmIpRestriction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteConfigScmIpRestriction">LinuxWebAppSlotSiteConfigScmIpRestriction</a> | cdktf.IResolvable

---


### LinuxWebAppSlotSiteCredentialList <a name="LinuxWebAppSlotSiteCredentialList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LinuxWebAppSlotSiteCredentialOutputReference <a name="LinuxWebAppSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredential">LinuxWebAppSlotSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotSiteCredential">LinuxWebAppSlotSiteCredential</a>

---


### LinuxWebAppSlotStorageAccountList <a name="LinuxWebAppSlotStorageAccountList" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.get"></a>

```typescript
public get(index: number): LinuxWebAppSlotStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LinuxWebAppSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a>[]

---


### LinuxWebAppSlotStorageAccountOutputReference <a name="LinuxWebAppSlotStorageAccountOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotStorageAccount | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotStorageAccount">LinuxWebAppSlotStorageAccount</a> | cdktf.IResolvable

---


### LinuxWebAppSlotTimeoutsOutputReference <a name="LinuxWebAppSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.Initializer"></a>

```typescript
import { linuxWebAppSlot } from '@cdktf/provider-azurerm'

new linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts">LinuxWebAppSlotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LinuxWebAppSlotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebAppSlot.LinuxWebAppSlotTimeouts">LinuxWebAppSlotTimeouts</a> | cdktf.IResolvable

---



