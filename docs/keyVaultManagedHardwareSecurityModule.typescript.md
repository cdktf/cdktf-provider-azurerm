# `keyVaultManagedHardwareSecurityModule` Submodule <a name="`keyVaultManagedHardwareSecurityModule` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModule <a name="KeyVaultManagedHardwareSecurityModule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module azurerm_key_vault_managed_hardware_security_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig">KeyVaultManagedHardwareSecurityModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig">KeyVaultManagedHardwareSecurityModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putNetworkAcls">putNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetNetworkAcls">resetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPurgeProtectionEnabled">resetPurgeProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSecurityDomainKeyVaultCertificateIds">resetSecurityDomainKeyVaultCertificateIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSecurityDomainQuorum">resetSecurityDomainQuorum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSoftDeleteRetentionDays">resetSoftDeleteRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkAcls` <a name="putNetworkAcls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putNetworkAcls"></a>

```typescript
public putNetworkAcls(value: KeyVaultManagedHardwareSecurityModuleNetworkAcls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkAcls` <a name="resetNetworkAcls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetNetworkAcls"></a>

```typescript
public resetNetworkAcls(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetPurgeProtectionEnabled` <a name="resetPurgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPurgeProtectionEnabled"></a>

```typescript
public resetPurgeProtectionEnabled(): void
```

##### `resetSecurityDomainKeyVaultCertificateIds` <a name="resetSecurityDomainKeyVaultCertificateIds" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSecurityDomainKeyVaultCertificateIds"></a>

```typescript
public resetSecurityDomainKeyVaultCertificateIds(): void
```

##### `resetSecurityDomainQuorum` <a name="resetSecurityDomainQuorum" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSecurityDomainQuorum"></a>

```typescript
public resetSecurityDomainQuorum(): void
```

##### `resetSoftDeleteRetentionDays` <a name="resetSoftDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSoftDeleteRetentionDays"></a>

```typescript
public resetSoftDeleteRetentionDays(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isConstruct"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformElement"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformResource"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.generateConfigForImport"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultManagedHardwareSecurityModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.hsmUri">hsmUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference">KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainEncryptedData">securityDomainEncryptedData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIdsInput">adminObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAclsInput">networkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabledInput">purgeProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainKeyVaultCertificateIdsInput">securityDomainKeyVaultCertificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainQuorumInput">securityDomainQuorumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDaysInput">softDeleteRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIds">adminObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabled">purgeProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainKeyVaultCertificateIds">securityDomainKeyVaultCertificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainQuorum">securityDomainQuorum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDays">softDeleteRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hsmUri`<sup>Required</sup> <a name="hsmUri" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.hsmUri"></a>

```typescript
public readonly hsmUri: string;
```

- *Type:* string

---

##### `networkAcls`<sup>Required</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAcls"></a>

```typescript
public readonly networkAcls: KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference">KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference</a>

---

##### `securityDomainEncryptedData`<sup>Required</sup> <a name="securityDomainEncryptedData" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainEncryptedData"></a>

```typescript
public readonly securityDomainEncryptedData: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference</a>

---

##### `adminObjectIdsInput`<sup>Optional</sup> <a name="adminObjectIdsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIdsInput"></a>

```typescript
public readonly adminObjectIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAclsInput`<sup>Optional</sup> <a name="networkAclsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAclsInput"></a>

```typescript
public readonly networkAclsInput: KeyVaultManagedHardwareSecurityModuleNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `purgeProtectionEnabledInput`<sup>Optional</sup> <a name="purgeProtectionEnabledInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabledInput"></a>

```typescript
public readonly purgeProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `securityDomainKeyVaultCertificateIdsInput`<sup>Optional</sup> <a name="securityDomainKeyVaultCertificateIdsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainKeyVaultCertificateIdsInput"></a>

```typescript
public readonly securityDomainKeyVaultCertificateIdsInput: string[];
```

- *Type:* string[]

---

##### `securityDomainQuorumInput`<sup>Optional</sup> <a name="securityDomainQuorumInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainQuorumInput"></a>

```typescript
public readonly securityDomainQuorumInput: number;
```

- *Type:* number

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `softDeleteRetentionDaysInput`<sup>Optional</sup> <a name="softDeleteRetentionDaysInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDaysInput"></a>

```typescript
public readonly softDeleteRetentionDaysInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultManagedHardwareSecurityModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>

---

##### `adminObjectIds`<sup>Required</sup> <a name="adminObjectIds" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIds"></a>

```typescript
public readonly adminObjectIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `purgeProtectionEnabled`<sup>Required</sup> <a name="purgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabled"></a>

```typescript
public readonly purgeProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `securityDomainKeyVaultCertificateIds`<sup>Required</sup> <a name="securityDomainKeyVaultCertificateIds" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainKeyVaultCertificateIds"></a>

```typescript
public readonly securityDomainKeyVaultCertificateIds: string[];
```

- *Type:* string[]

---

##### `securityDomainQuorum`<sup>Required</sup> <a name="securityDomainQuorum" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.securityDomainQuorum"></a>

```typescript
public readonly securityDomainQuorum: number;
```

- *Type:* number

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `softDeleteRetentionDays`<sup>Required</sup> <a name="softDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDays"></a>

```typescript
public readonly softDeleteRetentionDays: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleConfig <a name="KeyVaultManagedHardwareSecurityModuleConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleConfig: keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.adminObjectIds">adminObjectIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#location KeyVaultManagedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#name KeyVaultManagedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#id KeyVaultManagedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#public_network_access_enabled KeyVaultManagedHardwareSecurityModule#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.purgeProtectionEnabled">purgeProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.securityDomainKeyVaultCertificateIds">securityDomainKeyVaultCertificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#security_domain_key_vault_certificate_ids KeyVaultManagedHardwareSecurityModule#security_domain_key_vault_certificate_ids}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.securityDomainQuorum">securityDomainQuorum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#security_domain_quorum KeyVaultManagedHardwareSecurityModule#security_domain_quorum}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.softDeleteRetentionDays">softDeleteRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#tags KeyVaultManagedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminObjectIds`<sup>Required</sup> <a name="adminObjectIds" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.adminObjectIds"></a>

```typescript
public readonly adminObjectIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#location KeyVaultManagedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#name KeyVaultManagedHardwareSecurityModule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#id KeyVaultManagedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkAcls`<sup>Optional</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.networkAcls"></a>

```typescript
public readonly networkAcls: KeyVaultManagedHardwareSecurityModuleNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#network_acls KeyVaultManagedHardwareSecurityModule#network_acls}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#public_network_access_enabled KeyVaultManagedHardwareSecurityModule#public_network_access_enabled}.

---

##### `purgeProtectionEnabled`<sup>Optional</sup> <a name="purgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.purgeProtectionEnabled"></a>

```typescript
public readonly purgeProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}.

---

##### `securityDomainKeyVaultCertificateIds`<sup>Optional</sup> <a name="securityDomainKeyVaultCertificateIds" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.securityDomainKeyVaultCertificateIds"></a>

```typescript
public readonly securityDomainKeyVaultCertificateIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#security_domain_key_vault_certificate_ids KeyVaultManagedHardwareSecurityModule#security_domain_key_vault_certificate_ids}.

---

##### `securityDomainQuorum`<sup>Optional</sup> <a name="securityDomainQuorum" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.securityDomainQuorum"></a>

```typescript
public readonly securityDomainQuorum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#security_domain_quorum KeyVaultManagedHardwareSecurityModule#security_domain_quorum}.

---

##### `softDeleteRetentionDays`<sup>Optional</sup> <a name="softDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.softDeleteRetentionDays"></a>

```typescript
public readonly softDeleteRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#tags KeyVaultManagedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#timeouts KeyVaultManagedHardwareSecurityModule#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleNetworkAcls <a name="KeyVaultManagedHardwareSecurityModuleNetworkAcls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleNetworkAcls: keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.bypass">bypass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#bypass KeyVaultManagedHardwareSecurityModule#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#default_action KeyVaultManagedHardwareSecurityModule#default_action}. |

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#bypass KeyVaultManagedHardwareSecurityModule#bypass}.

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#default_action KeyVaultManagedHardwareSecurityModule#default_action}.

---

### KeyVaultManagedHardwareSecurityModuleTimeouts <a name="KeyVaultManagedHardwareSecurityModuleTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleTimeouts: keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#create KeyVaultManagedHardwareSecurityModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#delete KeyVaultManagedHardwareSecurityModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#read KeyVaultManagedHardwareSecurityModule#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#update KeyVaultManagedHardwareSecurityModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#create KeyVaultManagedHardwareSecurityModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#delete KeyVaultManagedHardwareSecurityModule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#read KeyVaultManagedHardwareSecurityModule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/key_vault_managed_hardware_security_module#update KeyVaultManagedHardwareSecurityModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypassInput">bypassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassInput`<sup>Optional</sup> <a name="bypassInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypassInput"></a>

```typescript
public readonly bypassInput: string;
```

- *Type:* string

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeyVaultManagedHardwareSecurityModuleNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

---


### KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModule } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultManagedHardwareSecurityModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>

---



