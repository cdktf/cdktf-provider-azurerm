# `hpcCache` Submodule <a name="`hpcCache` Submodule" id="@cdktf/provider-azurerm.hpcCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCache <a name="HpcCache" id="@cdktf/provider-azurerm.hpcCache.HpcCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache azurerm_hpc_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCache(scope: Construct, id: string, config: HpcCacheConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig">HpcCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig">HpcCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy">putDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory">putDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile">putDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap">putDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDns">putDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled">resetAutomaticallyRotateKeyToLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy">resetDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory">resetDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile">resetDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap">resetDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer">resetNtpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultAccessPolicy` <a name="putDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy"></a>

```typescript
public putDefaultAccessPolicy(value: HpcCacheDefaultAccessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `putDirectoryActiveDirectory` <a name="putDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory"></a>

```typescript
public putDirectoryActiveDirectory(value: HpcCacheDirectoryActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `putDirectoryFlatFile` <a name="putDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile"></a>

```typescript
public putDirectoryFlatFile(value: HpcCacheDirectoryFlatFile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `putDirectoryLdap` <a name="putDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap"></a>

```typescript
public putDirectoryLdap(value: HpcCacheDirectoryLdap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `putDns` <a name="putDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns"></a>

```typescript
public putDns(value: HpcCacheDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity"></a>

```typescript
public putIdentity(value: HpcCacheIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts"></a>

```typescript
public putTimeouts(value: HpcCacheTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---

##### `resetAutomaticallyRotateKeyToLatestEnabled` <a name="resetAutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled"></a>

```typescript
public resetAutomaticallyRotateKeyToLatestEnabled(): void
```

##### `resetDefaultAccessPolicy` <a name="resetDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy"></a>

```typescript
public resetDefaultAccessPolicy(): void
```

##### `resetDirectoryActiveDirectory` <a name="resetDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory"></a>

```typescript
public resetDirectoryActiveDirectory(): void
```

##### `resetDirectoryFlatFile` <a name="resetDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile"></a>

```typescript
public resetDirectoryFlatFile(): void
```

##### `resetDirectoryLdap` <a name="resetDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap"></a>

```typescript
public resetDirectoryLdap(): void
```

##### `resetDns` <a name="resetDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetNtpServer` <a name="resetNtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer"></a>

```typescript
public resetNtpServer(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

hpcCache.HpcCache.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

hpcCache.HpcCache.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

hpcCache.HpcCache.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

hpcCache.HpcCache.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HpcCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HpcCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HpcCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy">defaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory">directoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile">directoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap">directoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses">mountAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput">automaticallyRotateKeyToLatestEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput">cacheSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput">defaultAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput">directoryActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput">directoryFlatFileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput">directoryLdapInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput">dnsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput">ntpServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled">automaticallyRotateKeyToLatestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb">cacheSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer">ntpServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAccessPolicy`<sup>Required</sup> <a name="defaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy"></a>

```typescript
public readonly defaultAccessPolicy: HpcCacheDefaultAccessPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a>

---

##### `directoryActiveDirectory`<sup>Required</sup> <a name="directoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory"></a>

```typescript
public readonly directoryActiveDirectory: HpcCacheDirectoryActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a>

---

##### `directoryFlatFile`<sup>Required</sup> <a name="directoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile"></a>

```typescript
public readonly directoryFlatFile: HpcCacheDirectoryFlatFileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a>

---

##### `directoryLdap`<sup>Required</sup> <a name="directoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap"></a>

```typescript
public readonly directoryLdap: HpcCacheDirectoryLdapOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns"></a>

```typescript
public readonly dns: HpcCacheDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity"></a>

```typescript
public readonly identity: HpcCacheIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a>

---

##### `mountAddresses`<sup>Required</sup> <a name="mountAddresses" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses"></a>

```typescript
public readonly mountAddresses: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts"></a>

```typescript
public readonly timeouts: HpcCacheTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a>

---

##### `automaticallyRotateKeyToLatestEnabledInput`<sup>Optional</sup> <a name="automaticallyRotateKeyToLatestEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput"></a>

```typescript
public readonly automaticallyRotateKeyToLatestEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheSizeInGbInput`<sup>Optional</sup> <a name="cacheSizeInGbInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput"></a>

```typescript
public readonly cacheSizeInGbInput: number;
```

- *Type:* number

---

##### `defaultAccessPolicyInput`<sup>Optional</sup> <a name="defaultAccessPolicyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput"></a>

```typescript
public readonly defaultAccessPolicyInput: HpcCacheDefaultAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `directoryActiveDirectoryInput`<sup>Optional</sup> <a name="directoryActiveDirectoryInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput"></a>

```typescript
public readonly directoryActiveDirectoryInput: HpcCacheDirectoryActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `directoryFlatFileInput`<sup>Optional</sup> <a name="directoryFlatFileInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput"></a>

```typescript
public readonly directoryFlatFileInput: HpcCacheDirectoryFlatFile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `directoryLdapInput`<sup>Optional</sup> <a name="directoryLdapInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput"></a>

```typescript
public readonly directoryLdapInput: HpcCacheDirectoryLdap;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput"></a>

```typescript
public readonly dnsInput: HpcCacheDns;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput"></a>

```typescript
public readonly identityInput: HpcCacheIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ntpServerInput`<sup>Optional</sup> <a name="ntpServerInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput"></a>

```typescript
public readonly ntpServerInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HpcCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---

##### `automaticallyRotateKeyToLatestEnabled`<sup>Required</sup> <a name="automaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled"></a>

```typescript
public readonly automaticallyRotateKeyToLatestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheSizeInGb`<sup>Required</sup> <a name="cacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb"></a>

```typescript
public readonly cacheSizeInGb: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer"></a>

```typescript
public readonly ntpServer: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheConfig <a name="HpcCacheConfig" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheConfig: hpcCache.HpcCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb">cacheSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#location HpcCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#name HpcCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled">automaticallyRotateKeyToLatestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy">defaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | default_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory">directoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | directory_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile">directoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | directory_flat_file block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap">directoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | directory_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#id HpcCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu">mtu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#mtu HpcCache#mtu}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer">ntpServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#tags HpcCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cacheSizeInGb`<sup>Required</sup> <a name="cacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb"></a>

```typescript
public readonly cacheSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#location HpcCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#name HpcCache#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}.

---

##### `automaticallyRotateKeyToLatestEnabled`<sup>Optional</sup> <a name="automaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled"></a>

```typescript
public readonly automaticallyRotateKeyToLatestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}.

---

##### `defaultAccessPolicy`<sup>Optional</sup> <a name="defaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy"></a>

```typescript
public readonly defaultAccessPolicy: HpcCacheDefaultAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

default_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}

---

##### `directoryActiveDirectory`<sup>Optional</sup> <a name="directoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory"></a>

```typescript
public readonly directoryActiveDirectory: HpcCacheDirectoryActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

directory_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}

---

##### `directoryFlatFile`<sup>Optional</sup> <a name="directoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile"></a>

```typescript
public readonly directoryFlatFile: HpcCacheDirectoryFlatFile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

directory_flat_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}

---

##### `directoryLdap`<sup>Optional</sup> <a name="directoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap"></a>

```typescript
public readonly directoryLdap: HpcCacheDirectoryLdap;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

directory_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns"></a>

```typescript
public readonly dns: HpcCacheDns;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#dns HpcCache#dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#id HpcCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity"></a>

```typescript
public readonly identity: HpcCacheIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#identity HpcCache#identity}

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#mtu HpcCache#mtu}.

---

##### `ntpServer`<sup>Optional</sup> <a name="ntpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer"></a>

```typescript
public readonly ntpServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#tags HpcCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HpcCacheTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}

---

### HpcCacheDefaultAccessPolicy <a name="HpcCacheDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheDefaultAccessPolicy: hpcCache.HpcCacheDefaultAccessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule">accessRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>[]</code> | access_rule block. |

---

##### `accessRule`<sup>Required</sup> <a name="accessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule"></a>

```typescript
public readonly accessRule: IResolvable | HpcCacheDefaultAccessPolicyAccessRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>[]

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#access_rule HpcCache#access_rule}

---

### HpcCacheDefaultAccessPolicyAccessRule <a name="HpcCacheDefaultAccessPolicyAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheDefaultAccessPolicyAccessRule: hpcCache.HpcCacheDefaultAccessPolicyAccessRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access">access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#access HpcCache#access}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#scope HpcCache#scope}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid">anonymousGid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid">anonymousUid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#filter HpcCache#filter}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled">rootSquashEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled">submountAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled">suidEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#access HpcCache#access}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#scope HpcCache#scope}.

---

##### `anonymousGid`<sup>Optional</sup> <a name="anonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid"></a>

```typescript
public readonly anonymousGid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}.

---

##### `anonymousUid`<sup>Optional</sup> <a name="anonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid"></a>

```typescript
public readonly anonymousUid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#filter HpcCache#filter}.

---

##### `rootSquashEnabled`<sup>Optional</sup> <a name="rootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled"></a>

```typescript
public readonly rootSquashEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}.

---

##### `submountAccessEnabled`<sup>Optional</sup> <a name="submountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled"></a>

```typescript
public readonly submountAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}.

---

##### `suidEnabled`<sup>Optional</sup> <a name="suidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled"></a>

```typescript
public readonly suidEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}.

---

### HpcCacheDirectoryActiveDirectory <a name="HpcCacheDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheDirectoryActiveDirectory: hpcCache.HpcCacheDirectoryActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName">cacheNetbiosName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp">dnsPrimaryIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName">domainNetbiosName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#password HpcCache#password}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#username HpcCache#username}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp">dnsSecondaryIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}. |

---

##### `cacheNetbiosName`<sup>Required</sup> <a name="cacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName"></a>

```typescript
public readonly cacheNetbiosName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}.

---

##### `dnsPrimaryIp`<sup>Required</sup> <a name="dnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp"></a>

```typescript
public readonly dnsPrimaryIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}.

---

##### `domainNetbiosName`<sup>Required</sup> <a name="domainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName"></a>

```typescript
public readonly domainNetbiosName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#password HpcCache#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#username HpcCache#username}.

---

##### `dnsSecondaryIp`<sup>Optional</sup> <a name="dnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp"></a>

```typescript
public readonly dnsSecondaryIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}.

---

### HpcCacheDirectoryFlatFile <a name="HpcCacheDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheDirectoryFlatFile: hpcCache.HpcCacheDirectoryFlatFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri">groupFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri">passwordFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}. |

---

##### `groupFileUri`<sup>Required</sup> <a name="groupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri"></a>

```typescript
public readonly groupFileUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}.

---

##### `passwordFileUri`<sup>Required</sup> <a name="passwordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri"></a>

```typescript
public readonly passwordFileUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}.

---

### HpcCacheDirectoryLdap <a name="HpcCacheDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheDirectoryLdap: hpcCache.HpcCacheDirectoryLdap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn">baseDn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#server HpcCache#server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind">bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | bind block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri">certificateValidationUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically">downloadCertificateAutomatically</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}. |

---

##### `baseDn`<sup>Required</sup> <a name="baseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn"></a>

```typescript
public readonly baseDn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#server HpcCache#server}.

---

##### `bind`<sup>Optional</sup> <a name="bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind"></a>

```typescript
public readonly bind: HpcCacheDirectoryLdapBind;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

bind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#bind HpcCache#bind}

---

##### `certificateValidationUri`<sup>Optional</sup> <a name="certificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri"></a>

```typescript
public readonly certificateValidationUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}.

---

##### `downloadCertificateAutomatically`<sup>Optional</sup> <a name="downloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically"></a>

```typescript
public readonly downloadCertificateAutomatically: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}.

---

### HpcCacheDirectoryLdapBind <a name="HpcCacheDirectoryLdapBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheDirectoryLdapBind: hpcCache.HpcCacheDirectoryLdapBind = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn">dn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#dn HpcCache#dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#password HpcCache#password}. |

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#dn HpcCache#dn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#password HpcCache#password}.

---

### HpcCacheDns <a name="HpcCacheDns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheDns: hpcCache.HpcCacheDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers">servers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#servers HpcCache#servers}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain">searchDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}. |

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#servers HpcCache#servers}.

---

##### `searchDomain`<sup>Optional</sup> <a name="searchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain"></a>

```typescript
public readonly searchDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}.

---

### HpcCacheIdentity <a name="HpcCacheIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheIdentity: hpcCache.HpcCacheIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#type HpcCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#type HpcCache#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}.

---

### HpcCacheTimeouts <a name="HpcCacheTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

const hpcCacheTimeouts: hpcCache.HpcCacheTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#create HpcCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#delete HpcCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#read HpcCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#update HpcCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#create HpcCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#delete HpcCache#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#read HpcCache#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/hpc_cache#update HpcCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheDefaultAccessPolicyAccessRuleList <a name="HpcCacheDefaultAccessPolicyAccessRuleList" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get"></a>

```typescript
public get(index: number): HpcCacheDefaultAccessPolicyAccessRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HpcCacheDefaultAccessPolicyAccessRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>[]

---


### HpcCacheDefaultAccessPolicyAccessRuleOutputReference <a name="HpcCacheDefaultAccessPolicyAccessRuleOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid">resetAnonymousGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid">resetAnonymousUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled">resetRootSquashEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled">resetSubmountAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled">resetSuidEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnonymousGid` <a name="resetAnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid"></a>

```typescript
public resetAnonymousGid(): void
```

##### `resetAnonymousUid` <a name="resetAnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid"></a>

```typescript
public resetAnonymousUid(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetRootSquashEnabled` <a name="resetRootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled"></a>

```typescript
public resetRootSquashEnabled(): void
```

##### `resetSubmountAccessEnabled` <a name="resetSubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled"></a>

```typescript
public resetSubmountAccessEnabled(): void
```

##### `resetSuidEnabled` <a name="resetSuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled"></a>

```typescript
public resetSuidEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput">anonymousGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput">anonymousUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput">rootSquashEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput">submountAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput">suidEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid">anonymousGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid">anonymousUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled">rootSquashEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled">submountAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled">suidEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `anonymousGidInput`<sup>Optional</sup> <a name="anonymousGidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput"></a>

```typescript
public readonly anonymousGidInput: number;
```

- *Type:* number

---

##### `anonymousUidInput`<sup>Optional</sup> <a name="anonymousUidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput"></a>

```typescript
public readonly anonymousUidInput: number;
```

- *Type:* number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `rootSquashEnabledInput`<sup>Optional</sup> <a name="rootSquashEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput"></a>

```typescript
public readonly rootSquashEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `submountAccessEnabledInput`<sup>Optional</sup> <a name="submountAccessEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput"></a>

```typescript
public readonly submountAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suidEnabledInput`<sup>Optional</sup> <a name="suidEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput"></a>

```typescript
public readonly suidEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `anonymousGid`<sup>Required</sup> <a name="anonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid"></a>

```typescript
public readonly anonymousGid: number;
```

- *Type:* number

---

##### `anonymousUid`<sup>Required</sup> <a name="anonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid"></a>

```typescript
public readonly anonymousUid: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `rootSquashEnabled`<sup>Required</sup> <a name="rootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled"></a>

```typescript
public readonly rootSquashEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `submountAccessEnabled`<sup>Required</sup> <a name="submountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled"></a>

```typescript
public readonly submountAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suidEnabled`<sup>Required</sup> <a name="suidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled"></a>

```typescript
public readonly suidEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HpcCacheDefaultAccessPolicyAccessRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>

---


### HpcCacheDefaultAccessPolicyOutputReference <a name="HpcCacheDefaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDefaultAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule">putAccessRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRule` <a name="putAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule"></a>

```typescript
public putAccessRule(value: IResolvable | HpcCacheDefaultAccessPolicyAccessRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule">accessRule</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput">accessRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRule`<sup>Required</sup> <a name="accessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule"></a>

```typescript
public readonly accessRule: HpcCacheDefaultAccessPolicyAccessRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a>

---

##### `accessRuleInput`<sup>Optional</sup> <a name="accessRuleInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput"></a>

```typescript
public readonly accessRuleInput: IResolvable | HpcCacheDefaultAccessPolicyAccessRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HpcCacheDefaultAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---


### HpcCacheDirectoryActiveDirectoryOutputReference <a name="HpcCacheDirectoryActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp">resetDnsSecondaryIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsSecondaryIp` <a name="resetDnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp"></a>

```typescript
public resetDnsSecondaryIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput">cacheNetbiosNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput">dnsPrimaryIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput">dnsSecondaryIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput">domainNetbiosNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName">cacheNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp">dnsPrimaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp">dnsSecondaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName">domainNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheNetbiosNameInput`<sup>Optional</sup> <a name="cacheNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput"></a>

```typescript
public readonly cacheNetbiosNameInput: string;
```

- *Type:* string

---

##### `dnsPrimaryIpInput`<sup>Optional</sup> <a name="dnsPrimaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput"></a>

```typescript
public readonly dnsPrimaryIpInput: string;
```

- *Type:* string

---

##### `dnsSecondaryIpInput`<sup>Optional</sup> <a name="dnsSecondaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput"></a>

```typescript
public readonly dnsSecondaryIpInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainNetbiosNameInput`<sup>Optional</sup> <a name="domainNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput"></a>

```typescript
public readonly domainNetbiosNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `cacheNetbiosName`<sup>Required</sup> <a name="cacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName"></a>

```typescript
public readonly cacheNetbiosName: string;
```

- *Type:* string

---

##### `dnsPrimaryIp`<sup>Required</sup> <a name="dnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp"></a>

```typescript
public readonly dnsPrimaryIp: string;
```

- *Type:* string

---

##### `dnsSecondaryIp`<sup>Required</sup> <a name="dnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp"></a>

```typescript
public readonly dnsSecondaryIp: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainNetbiosName`<sup>Required</sup> <a name="domainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName"></a>

```typescript
public readonly domainNetbiosName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HpcCacheDirectoryActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---


### HpcCacheDirectoryFlatFileOutputReference <a name="HpcCacheDirectoryFlatFileOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDirectoryFlatFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput">groupFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput">passwordFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri">groupFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri">passwordFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupFileUriInput`<sup>Optional</sup> <a name="groupFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput"></a>

```typescript
public readonly groupFileUriInput: string;
```

- *Type:* string

---

##### `passwordFileUriInput`<sup>Optional</sup> <a name="passwordFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput"></a>

```typescript
public readonly passwordFileUriInput: string;
```

- *Type:* string

---

##### `groupFileUri`<sup>Required</sup> <a name="groupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri"></a>

```typescript
public readonly groupFileUri: string;
```

- *Type:* string

---

##### `passwordFileUri`<sup>Required</sup> <a name="passwordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri"></a>

```typescript
public readonly passwordFileUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HpcCacheDirectoryFlatFile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---


### HpcCacheDirectoryLdapBindOutputReference <a name="HpcCacheDirectoryLdapBindOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDirectoryLdapBindOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput">dnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnInput`<sup>Optional</sup> <a name="dnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput"></a>

```typescript
public readonly dnInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HpcCacheDirectoryLdapBind;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---


### HpcCacheDirectoryLdapOutputReference <a name="HpcCacheDirectoryLdapOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDirectoryLdapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind">putBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind">resetBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri">resetCertificateValidationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically">resetDownloadCertificateAutomatically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBind` <a name="putBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind"></a>

```typescript
public putBind(value: HpcCacheDirectoryLdapBind): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `resetBind` <a name="resetBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind"></a>

```typescript
public resetBind(): void
```

##### `resetCertificateValidationUri` <a name="resetCertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri"></a>

```typescript
public resetCertificateValidationUri(): void
```

##### `resetDownloadCertificateAutomatically` <a name="resetDownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically"></a>

```typescript
public resetDownloadCertificateAutomatically(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind">bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput">baseDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput">bindInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput">certificateValidationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput">downloadCertificateAutomaticallyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn">baseDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri">certificateValidationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically">downloadCertificateAutomatically</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bind`<sup>Required</sup> <a name="bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind"></a>

```typescript
public readonly bind: HpcCacheDirectoryLdapBindOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a>

---

##### `baseDnInput`<sup>Optional</sup> <a name="baseDnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput"></a>

```typescript
public readonly baseDnInput: string;
```

- *Type:* string

---

##### `bindInput`<sup>Optional</sup> <a name="bindInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput"></a>

```typescript
public readonly bindInput: HpcCacheDirectoryLdapBind;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `certificateValidationUriInput`<sup>Optional</sup> <a name="certificateValidationUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput"></a>

```typescript
public readonly certificateValidationUriInput: string;
```

- *Type:* string

---

##### `downloadCertificateAutomaticallyInput`<sup>Optional</sup> <a name="downloadCertificateAutomaticallyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput"></a>

```typescript
public readonly downloadCertificateAutomaticallyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `baseDn`<sup>Required</sup> <a name="baseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn"></a>

```typescript
public readonly baseDn: string;
```

- *Type:* string

---

##### `certificateValidationUri`<sup>Required</sup> <a name="certificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri"></a>

```typescript
public readonly certificateValidationUri: string;
```

- *Type:* string

---

##### `downloadCertificateAutomatically`<sup>Required</sup> <a name="downloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically"></a>

```typescript
public readonly downloadCertificateAutomatically: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HpcCacheDirectoryLdap;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---


### HpcCacheDnsOutputReference <a name="HpcCacheDnsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain">resetSearchDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSearchDomain` <a name="resetSearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain"></a>

```typescript
public resetSearchDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput">searchDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput">serversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain">searchDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers">servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `searchDomainInput`<sup>Optional</sup> <a name="searchDomainInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput"></a>

```typescript
public readonly searchDomainInput: string;
```

- *Type:* string

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput"></a>

```typescript
public readonly serversInput: string[];
```

- *Type:* string[]

---

##### `searchDomain`<sup>Required</sup> <a name="searchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain"></a>

```typescript
public readonly searchDomain: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HpcCacheDns;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---


### HpcCacheIdentityOutputReference <a name="HpcCacheIdentityOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HpcCacheIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---


### HpcCacheTimeoutsOutputReference <a name="HpcCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer"></a>

```typescript
import { hpcCache } from '@cdktf/provider-azurerm'

new hpcCache.HpcCacheTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HpcCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---



