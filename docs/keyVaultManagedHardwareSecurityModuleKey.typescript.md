# `keyVaultManagedHardwareSecurityModuleKey` Submodule <a name="`keyVaultManagedHardwareSecurityModuleKey` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleKey <a name="KeyVaultManagedHardwareSecurityModuleKey" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key azurerm_key_vault_managed_hardware_security_module_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig">KeyVaultManagedHardwareSecurityModuleKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig">KeyVaultManagedHardwareSecurityModuleKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetCurve">resetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetNotBeforeDate">resetNotBeforeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

---

##### `resetCurve` <a name="resetCurve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetCurve"></a>

```typescript
public resetCurve(): void
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetExpirationDate"></a>

```typescript
public resetExpirationDate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetNotBeforeDate` <a name="resetNotBeforeDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetNotBeforeDate"></a>

```typescript
public resetNotBeforeDate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isConstruct"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformElement"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformResource"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultManagedHardwareSecurityModuleKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.versionedId">versionedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curveInput">curveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOptsInput">keyOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput">managedHsmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDateInput">notBeforeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curve">curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOpts">keyOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId">managedHsmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate">notBeforeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a>

---

##### `versionedId`<sup>Required</sup> <a name="versionedId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.versionedId"></a>

```typescript
public readonly versionedId: string;
```

- *Type:* string

---

##### `curveInput`<sup>Optional</sup> <a name="curveInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curveInput"></a>

```typescript
public readonly curveInput: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyOptsInput`<sup>Optional</sup> <a name="keyOptsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOptsInput"></a>

```typescript
public readonly keyOptsInput: string[];
```

- *Type:* string[]

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `managedHsmIdInput`<sup>Optional</sup> <a name="managedHsmIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput"></a>

```typescript
public readonly managedHsmIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notBeforeDateInput`<sup>Optional</sup> <a name="notBeforeDateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDateInput"></a>

```typescript
public readonly notBeforeDateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultManagedHardwareSecurityModuleKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyOpts`<sup>Required</sup> <a name="keyOpts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOpts"></a>

```typescript
public readonly keyOpts: string[];
```

- *Type:* string[]

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId"></a>

```typescript
public readonly managedHsmId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notBeforeDate`<sup>Required</sup> <a name="notBeforeDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate"></a>

```typescript
public readonly notBeforeDate: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleKeyConfig <a name="KeyVaultManagedHardwareSecurityModuleKeyConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleKeyConfig: keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyOpts">keyOpts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#key_opts KeyVaultManagedHardwareSecurityModuleKey#key_opts}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyType">keyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#key_type KeyVaultManagedHardwareSecurityModuleKey#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId">managedHsmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#managed_hsm_id KeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#name KeyVaultManagedHardwareSecurityModuleKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.curve">curve</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#curve KeyVaultManagedHardwareSecurityModuleKey#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.expirationDate">expirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#expiration_date KeyVaultManagedHardwareSecurityModuleKey#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#id KeyVaultManagedHardwareSecurityModuleKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keySize">keySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#key_size KeyVaultManagedHardwareSecurityModuleKey#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.notBeforeDate">notBeforeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#not_before_date KeyVaultManagedHardwareSecurityModuleKey#not_before_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#tags KeyVaultManagedHardwareSecurityModuleKey#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyOpts`<sup>Required</sup> <a name="keyOpts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyOpts"></a>

```typescript
public readonly keyOpts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#key_opts KeyVaultManagedHardwareSecurityModuleKey#key_opts}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#key_type KeyVaultManagedHardwareSecurityModuleKey#key_type}.

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId"></a>

```typescript
public readonly managedHsmId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#managed_hsm_id KeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#name KeyVaultManagedHardwareSecurityModuleKey#name}.

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#curve KeyVaultManagedHardwareSecurityModuleKey#curve}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#expiration_date KeyVaultManagedHardwareSecurityModuleKey#expiration_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#id KeyVaultManagedHardwareSecurityModuleKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#key_size KeyVaultManagedHardwareSecurityModuleKey#key_size}.

---

##### `notBeforeDate`<sup>Optional</sup> <a name="notBeforeDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.notBeforeDate"></a>

```typescript
public readonly notBeforeDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#not_before_date KeyVaultManagedHardwareSecurityModuleKey#not_before_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#tags KeyVaultManagedHardwareSecurityModuleKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#timeouts KeyVaultManagedHardwareSecurityModuleKey#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleKeyTimeouts <a name="KeyVaultManagedHardwareSecurityModuleKeyTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleKeyTimeouts: keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#create KeyVaultManagedHardwareSecurityModuleKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#delete KeyVaultManagedHardwareSecurityModuleKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#read KeyVaultManagedHardwareSecurityModuleKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#update KeyVaultManagedHardwareSecurityModuleKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#create KeyVaultManagedHardwareSecurityModuleKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#delete KeyVaultManagedHardwareSecurityModuleKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#read KeyVaultManagedHardwareSecurityModuleKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/key_vault_managed_hardware_security_module_key#update KeyVaultManagedHardwareSecurityModuleKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleKey } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultManagedHardwareSecurityModuleKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

---



