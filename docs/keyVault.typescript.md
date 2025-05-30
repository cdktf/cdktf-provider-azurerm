# `keyVault` Submodule <a name="`keyVault` Submodule" id="@cdktf/provider-azurerm.keyVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVault <a name="KeyVault" id="@cdktf/provider-azurerm.keyVault.KeyVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault azurerm_key_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

new keyVault.KeyVault(scope: Construct, id: string, config: KeyVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig">KeyVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig">KeyVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy">putAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putContact">putContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls">putNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetAccessPolicy">resetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetContact">resetContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDeployment">resetEnabledForDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDiskEncryption">resetEnabledForDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForTemplateDeployment">resetEnabledForTemplateDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnableRbacAuthorization">resetEnableRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetNetworkAcls">resetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetPurgeProtectionEnabled">resetPurgeProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetSoftDeleteRetentionDays">resetSoftDeleteRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVault.KeyVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVault.KeyVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVault.KeyVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVault.KeyVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVault.KeyVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessPolicy` <a name="putAccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy"></a>

```typescript
public putAccessPolicy(value: IResolvable | KeyVaultAccessPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>[]

---

##### `putContact` <a name="putContact" id="@cdktf/provider-azurerm.keyVault.KeyVault.putContact"></a>

```typescript
public putContact(value: IResolvable | KeyVaultContact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putContact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>[]

---

##### `putNetworkAcls` <a name="putNetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls"></a>

```typescript
public putNetworkAcls(value: KeyVaultNetworkAcls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

---

##### `resetAccessPolicy` <a name="resetAccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetAccessPolicy"></a>

```typescript
public resetAccessPolicy(): void
```

##### `resetContact` <a name="resetContact" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetContact"></a>

```typescript
public resetContact(): void
```

##### `resetEnabledForDeployment` <a name="resetEnabledForDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDeployment"></a>

```typescript
public resetEnabledForDeployment(): void
```

##### `resetEnabledForDiskEncryption` <a name="resetEnabledForDiskEncryption" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDiskEncryption"></a>

```typescript
public resetEnabledForDiskEncryption(): void
```

##### `resetEnabledForTemplateDeployment` <a name="resetEnabledForTemplateDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForTemplateDeployment"></a>

```typescript
public resetEnabledForTemplateDeployment(): void
```

##### `resetEnableRbacAuthorization` <a name="resetEnableRbacAuthorization" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnableRbacAuthorization"></a>

```typescript
public resetEnableRbacAuthorization(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkAcls` <a name="resetNetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetNetworkAcls"></a>

```typescript
public resetNetworkAcls(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetPurgeProtectionEnabled` <a name="resetPurgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetPurgeProtectionEnabled"></a>

```typescript
public resetPurgeProtectionEnabled(): void
```

##### `resetSoftDeleteRetentionDays` <a name="resetSoftDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetSoftDeleteRetentionDays"></a>

```typescript
public resetSoftDeleteRetentionDays(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

keyVault.KeyVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

keyVault.KeyVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

keyVault.KeyVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

keyVault.KeyVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicy">accessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList">KeyVaultContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.vaultUri">vaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicyInput">accessPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.contactInput">contactInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeploymentInput">enabledForDeploymentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryptionInput">enabledForDiskEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeploymentInput">enabledForTemplateDeploymentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorizationInput">enableRbacAuthorizationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAclsInput">networkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabledInput">purgeProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDaysInput">softDeleteRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeployment">enabledForDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryption">enabledForDiskEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeployment">enabledForTemplateDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorization">enableRbacAuthorization</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabled">purgeProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDays">softDeleteRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: KeyVaultAccessPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a>

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.contact"></a>

```typescript
public readonly contact: KeyVaultContactList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList">KeyVaultContactList</a>

---

##### `networkAcls`<sup>Required</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAcls"></a>

```typescript
public readonly networkAcls: KeyVaultNetworkAclsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a>

---

##### `vaultUri`<sup>Required</sup> <a name="vaultUri" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.vaultUri"></a>

```typescript
public readonly vaultUri: string;
```

- *Type:* string

---

##### `accessPolicyInput`<sup>Optional</sup> <a name="accessPolicyInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicyInput"></a>

```typescript
public readonly accessPolicyInput: IResolvable | KeyVaultAccessPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>[]

---

##### `contactInput`<sup>Optional</sup> <a name="contactInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.contactInput"></a>

```typescript
public readonly contactInput: IResolvable | KeyVaultContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>[]

---

##### `enabledForDeploymentInput`<sup>Optional</sup> <a name="enabledForDeploymentInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeploymentInput"></a>

```typescript
public readonly enabledForDeploymentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledForDiskEncryptionInput`<sup>Optional</sup> <a name="enabledForDiskEncryptionInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryptionInput"></a>

```typescript
public readonly enabledForDiskEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledForTemplateDeploymentInput`<sup>Optional</sup> <a name="enabledForTemplateDeploymentInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeploymentInput"></a>

```typescript
public readonly enabledForTemplateDeploymentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableRbacAuthorizationInput`<sup>Optional</sup> <a name="enableRbacAuthorizationInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorizationInput"></a>

```typescript
public readonly enableRbacAuthorizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAclsInput`<sup>Optional</sup> <a name="networkAclsInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAclsInput"></a>

```typescript
public readonly networkAclsInput: KeyVaultNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `purgeProtectionEnabledInput`<sup>Optional</sup> <a name="purgeProtectionEnabledInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabledInput"></a>

```typescript
public readonly purgeProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `softDeleteRetentionDaysInput`<sup>Optional</sup> <a name="softDeleteRetentionDaysInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDaysInput"></a>

```typescript
public readonly softDeleteRetentionDaysInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

---

##### `enabledForDeployment`<sup>Required</sup> <a name="enabledForDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeployment"></a>

```typescript
public readonly enabledForDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledForDiskEncryption`<sup>Required</sup> <a name="enabledForDiskEncryption" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryption"></a>

```typescript
public readonly enabledForDiskEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledForTemplateDeployment`<sup>Required</sup> <a name="enabledForTemplateDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeployment"></a>

```typescript
public readonly enabledForTemplateDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableRbacAuthorization`<sup>Required</sup> <a name="enableRbacAuthorization" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorization"></a>

```typescript
public readonly enableRbacAuthorization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `purgeProtectionEnabled`<sup>Required</sup> <a name="purgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabled"></a>

```typescript
public readonly purgeProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `softDeleteRetentionDays`<sup>Required</sup> <a name="softDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDays"></a>

```typescript
public readonly softDeleteRetentionDays: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultAccessPolicy <a name="KeyVaultAccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

const keyVaultAccessPolicy: keyVault.KeyVaultAccessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#application_id KeyVault#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.certificatePermissions">certificatePermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#certificate_permissions KeyVault#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.keyPermissions">keyPermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#key_permissions KeyVault#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#object_id KeyVault#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.secretPermissions">secretPermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#secret_permissions KeyVault#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.storagePermissions">storagePermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#storage_permissions KeyVault#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}. |

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#application_id KeyVault#application_id}.

---

##### `certificatePermissions`<sup>Optional</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.certificatePermissions"></a>

```typescript
public readonly certificatePermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#certificate_permissions KeyVault#certificate_permissions}.

---

##### `keyPermissions`<sup>Optional</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.keyPermissions"></a>

```typescript
public readonly keyPermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#key_permissions KeyVault#key_permissions}.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#object_id KeyVault#object_id}.

---

##### `secretPermissions`<sup>Optional</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.secretPermissions"></a>

```typescript
public readonly secretPermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#secret_permissions KeyVault#secret_permissions}.

---

##### `storagePermissions`<sup>Optional</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.storagePermissions"></a>

```typescript
public readonly storagePermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#storage_permissions KeyVault#storage_permissions}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}.

---

### KeyVaultConfig <a name="KeyVaultConfig" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

const keyVaultConfig: keyVault.KeyVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#location KeyVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#sku_name KeyVault#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.accessPolicy">accessPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#access_policy KeyVault#access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.contact">contact</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>[]</code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDeployment">enabledForDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDiskEncryption">enabledForDiskEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment">enabledForTemplateDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enableRbacAuthorization">enableRbacAuthorization</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#id KeyVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.purgeProtectionEnabled">purgeProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.softDeleteRetentionDays">softDeleteRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#tags KeyVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#location KeyVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#name KeyVault#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#sku_name KeyVault#sku_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}.

---

##### `accessPolicy`<sup>Optional</sup> <a name="accessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: IResolvable | KeyVaultAccessPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#access_policy KeyVault#access_policy}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.contact"></a>

```typescript
public readonly contact: IResolvable | KeyVaultContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>[]

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#contact KeyVault#contact}

---

##### `enabledForDeployment`<sup>Optional</sup> <a name="enabledForDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDeployment"></a>

```typescript
public readonly enabledForDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}.

---

##### `enabledForDiskEncryption`<sup>Optional</sup> <a name="enabledForDiskEncryption" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDiskEncryption"></a>

```typescript
public readonly enabledForDiskEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}.

---

##### `enabledForTemplateDeployment`<sup>Optional</sup> <a name="enabledForTemplateDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment"></a>

```typescript
public readonly enabledForTemplateDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}.

---

##### `enableRbacAuthorization`<sup>Optional</sup> <a name="enableRbacAuthorization" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enableRbacAuthorization"></a>

```typescript
public readonly enableRbacAuthorization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#id KeyVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkAcls`<sup>Optional</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.networkAcls"></a>

```typescript
public readonly networkAcls: KeyVaultNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#network_acls KeyVault#network_acls}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}.

---

##### `purgeProtectionEnabled`<sup>Optional</sup> <a name="purgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.purgeProtectionEnabled"></a>

```typescript
public readonly purgeProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}.

---

##### `softDeleteRetentionDays`<sup>Optional</sup> <a name="softDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.softDeleteRetentionDays"></a>

```typescript
public readonly softDeleteRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#tags KeyVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#timeouts KeyVault#timeouts}

---

### KeyVaultContact <a name="KeyVaultContact" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

const keyVaultContact: keyVault.KeyVaultContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#email KeyVault#email}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.phone">phone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#phone KeyVault#phone}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#email KeyVault#email}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#name KeyVault#name}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#phone KeyVault#phone}.

---

### KeyVaultNetworkAcls <a name="KeyVaultNetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

const keyVaultNetworkAcls: keyVault.KeyVaultNetworkAcls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.bypass">bypass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#bypass KeyVault#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#default_action KeyVault#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.ipRules">ipRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}. |

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#bypass KeyVault#bypass}.

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#default_action KeyVault#default_action}.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}.

---

##### `virtualNetworkSubnetIds`<sup>Optional</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds"></a>

```typescript
public readonly virtualNetworkSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}.

---

### KeyVaultTimeouts <a name="KeyVaultTimeouts" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

const keyVaultTimeouts: keyVault.KeyVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#create KeyVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#delete KeyVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#read KeyVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#update KeyVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#create KeyVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#delete KeyVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#read KeyVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault#update KeyVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultAccessPolicyList <a name="KeyVaultAccessPolicyList" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

new keyVault.KeyVaultAccessPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get"></a>

```typescript
public get(index: number): KeyVaultAccessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultAccessPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>[]

---


### KeyVaultAccessPolicyOutputReference <a name="KeyVaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

new keyVault.KeyVaultAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions">resetCertificatePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions">resetKeyPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions">resetSecretPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions">resetStoragePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetCertificatePermissions` <a name="resetCertificatePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions"></a>

```typescript
public resetCertificatePermissions(): void
```

##### `resetKeyPermissions` <a name="resetKeyPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions"></a>

```typescript
public resetKeyPermissions(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId"></a>

```typescript
public resetObjectId(): void
```

##### `resetSecretPermissions` <a name="resetSecretPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions"></a>

```typescript
public resetSecretPermissions(): void
```

##### `resetStoragePermissions` <a name="resetStoragePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions"></a>

```typescript
public resetStoragePermissions(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput">certificatePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput">keyPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput">secretPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput">storagePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions">certificatePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions">keyPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions">secretPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions">storagePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `certificatePermissionsInput`<sup>Optional</sup> <a name="certificatePermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput"></a>

```typescript
public readonly certificatePermissionsInput: string[];
```

- *Type:* string[]

---

##### `keyPermissionsInput`<sup>Optional</sup> <a name="keyPermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput"></a>

```typescript
public readonly keyPermissionsInput: string[];
```

- *Type:* string[]

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `secretPermissionsInput`<sup>Optional</sup> <a name="secretPermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput"></a>

```typescript
public readonly secretPermissionsInput: string[];
```

- *Type:* string[]

---

##### `storagePermissionsInput`<sup>Optional</sup> <a name="storagePermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput"></a>

```typescript
public readonly storagePermissionsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `certificatePermissions`<sup>Required</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions"></a>

```typescript
public readonly certificatePermissions: string[];
```

- *Type:* string[]

---

##### `keyPermissions`<sup>Required</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions"></a>

```typescript
public readonly keyPermissions: string[];
```

- *Type:* string[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `secretPermissions`<sup>Required</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions"></a>

```typescript
public readonly secretPermissions: string[];
```

- *Type:* string[]

---

##### `storagePermissions`<sup>Required</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions"></a>

```typescript
public readonly storagePermissions: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultAccessPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>

---


### KeyVaultContactList <a name="KeyVaultContactList" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

new keyVault.KeyVaultContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get"></a>

```typescript
public get(index: number): KeyVaultContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>[]

---


### KeyVaultContactOutputReference <a name="KeyVaultContactOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

new keyVault.KeyVaultContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetPhone">resetPhone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPhone` <a name="resetPhone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetPhone"></a>

```typescript
public resetPhone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phoneInput">phoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phoneInput"></a>

```typescript
public readonly phoneInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultContact;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>

---


### KeyVaultNetworkAclsOutputReference <a name="KeyVaultNetworkAclsOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

new keyVault.KeyVaultNetworkAclsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds">resetVirtualNetworkSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules"></a>

```typescript
public resetIpRules(): void
```

##### `resetVirtualNetworkSubnetIds` <a name="resetVirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds"></a>

```typescript
public resetVirtualNetworkSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput">bypassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput">virtualNetworkSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules">ipRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassInput`<sup>Optional</sup> <a name="bypassInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput"></a>

```typescript
public readonly bypassInput: string;
```

- *Type:* string

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput"></a>

```typescript
public readonly ipRulesInput: string[];
```

- *Type:* string[]

---

##### `virtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```typescript
public readonly virtualNetworkSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

---

##### `virtualNetworkSubnetIds`<sup>Required</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds"></a>

```typescript
public readonly virtualNetworkSubnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeyVaultNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---


### KeyVaultTimeoutsOutputReference <a name="KeyVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVault } from '@cdktf/provider-azurerm'

new keyVault.KeyVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

---



