# `dataAzurermRedisCache` Submodule <a name="`dataAzurermRedisCache` Submodule" id="@cdktf/provider-azurerm.dataAzurermRedisCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermRedisCache <a name="DataAzurermRedisCache" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache azurerm_redis_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

new dataAzurermRedisCache.DataAzurermRedisCache(scope: Construct, id: string, config: DataAzurermRedisCacheConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig">DataAzurermRedisCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig">DataAzurermRedisCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermRedisCacheTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts">DataAzurermRedisCacheTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermRedisCache resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isConstruct"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

dataAzurermRedisCache.DataAzurermRedisCache.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isTerraformElement"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

dataAzurermRedisCache.DataAzurermRedisCache.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isTerraformDataSource"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

dataAzurermRedisCache.DataAzurermRedisCache.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.generateConfigForImport"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

dataAzurermRedisCache.DataAzurermRedisCache.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermRedisCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermRedisCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermRedisCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermRedisCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.nonSslPortEnabled">nonSslPortEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.patchSchedule">patchSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList">DataAzurermRedisCachePatchScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.privateStaticIpAddress">privateStaticIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.redisConfiguration">redisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList">DataAzurermRedisCacheRedisConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.shardCount">shardCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.sslPort">sslPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference">DataAzurermRedisCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts">DataAzurermRedisCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessKeysAuthenticationEnabled`<sup>Required</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.accessKeysAuthenticationEnabled"></a>

```typescript
public readonly accessKeysAuthenticationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `nonSslPortEnabled`<sup>Required</sup> <a name="nonSslPortEnabled" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.nonSslPortEnabled"></a>

```typescript
public readonly nonSslPortEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `patchSchedule`<sup>Required</sup> <a name="patchSchedule" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.patchSchedule"></a>

```typescript
public readonly patchSchedule: DataAzurermRedisCachePatchScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList">DataAzurermRedisCachePatchScheduleList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `privateStaticIpAddress`<sup>Required</sup> <a name="privateStaticIpAddress" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.privateStaticIpAddress"></a>

```typescript
public readonly privateStaticIpAddress: string;
```

- *Type:* string

---

##### `redisConfiguration`<sup>Required</sup> <a name="redisConfiguration" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.redisConfiguration"></a>

```typescript
public readonly redisConfiguration: DataAzurermRedisCacheRedisConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList">DataAzurermRedisCacheRedisConfigurationList</a>

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `sslPort`<sup>Required</sup> <a name="sslPort" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.sslPort"></a>

```typescript
public readonly sslPort: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermRedisCacheTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference">DataAzurermRedisCacheTimeoutsOutputReference</a>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermRedisCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts">DataAzurermRedisCacheTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCache.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermRedisCacheConfig <a name="DataAzurermRedisCacheConfig" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

const dataAzurermRedisCacheConfig: dataAzurermRedisCache.DataAzurermRedisCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#name DataAzurermRedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#resource_group_name DataAzurermRedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#id DataAzurermRedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts">DataAzurermRedisCacheTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#name DataAzurermRedisCache#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#resource_group_name DataAzurermRedisCache#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#id DataAzurermRedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermRedisCacheTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts">DataAzurermRedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#timeouts DataAzurermRedisCache#timeouts}

---

### DataAzurermRedisCachePatchSchedule <a name="DataAzurermRedisCachePatchSchedule" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchSchedule.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

const dataAzurermRedisCachePatchSchedule: dataAzurermRedisCache.DataAzurermRedisCachePatchSchedule = { ... }
```


### DataAzurermRedisCacheRedisConfiguration <a name="DataAzurermRedisCacheRedisConfiguration" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfiguration.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

const dataAzurermRedisCacheRedisConfiguration: dataAzurermRedisCache.DataAzurermRedisCacheRedisConfiguration = { ... }
```


### DataAzurermRedisCacheTimeouts <a name="DataAzurermRedisCacheTimeouts" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

const dataAzurermRedisCacheTimeouts: dataAzurermRedisCache.DataAzurermRedisCacheTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#read DataAzurermRedisCache#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/redis_cache#read DataAzurermRedisCache#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermRedisCachePatchScheduleList <a name="DataAzurermRedisCachePatchScheduleList" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

new dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.get"></a>

```typescript
public get(index: number): DataAzurermRedisCachePatchScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRedisCachePatchScheduleOutputReference <a name="DataAzurermRedisCachePatchScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

new dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.startHourUtc">startHourUtc</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchSchedule">DataAzurermRedisCachePatchSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `startHourUtc`<sup>Required</sup> <a name="startHourUtc" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.startHourUtc"></a>

```typescript
public readonly startHourUtc: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRedisCachePatchSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCachePatchSchedule">DataAzurermRedisCachePatchSchedule</a>

---


### DataAzurermRedisCacheRedisConfigurationList <a name="DataAzurermRedisCacheRedisConfigurationList" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

new dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.get"></a>

```typescript
public get(index: number): DataAzurermRedisCacheRedisConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRedisCacheRedisConfigurationOutputReference <a name="DataAzurermRedisCacheRedisConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

new dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled">activeDirectoryAuthenticationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled">aofBackupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0">aofStorageConnectionString0</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1">aofStorageConnectionString1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.authenticationEnabled">authenticationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod">dataPersistenceAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxclients">maxclients</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved">maxfragmentationmemoryReserved</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta">maxmemoryDelta</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved">maxmemoryReserved</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled">rdbBackupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency">rdbBackupFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount">rdbBackupMaxSnapshotCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString">rdbStorageConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId">storageAccountSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfiguration">DataAzurermRedisCacheRedisConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryAuthenticationEnabled`<sup>Required</sup> <a name="activeDirectoryAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled"></a>

```typescript
public readonly activeDirectoryAuthenticationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `aofBackupEnabled`<sup>Required</sup> <a name="aofBackupEnabled" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled"></a>

```typescript
public readonly aofBackupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `aofStorageConnectionString0`<sup>Required</sup> <a name="aofStorageConnectionString0" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0"></a>

```typescript
public readonly aofStorageConnectionString0: string;
```

- *Type:* string

---

##### `aofStorageConnectionString1`<sup>Required</sup> <a name="aofStorageConnectionString1" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1"></a>

```typescript
public readonly aofStorageConnectionString1: string;
```

- *Type:* string

---

##### `authenticationEnabled`<sup>Required</sup> <a name="authenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.authenticationEnabled"></a>

```typescript
public readonly authenticationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dataPersistenceAuthenticationMethod`<sup>Required</sup> <a name="dataPersistenceAuthenticationMethod" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod"></a>

```typescript
public readonly dataPersistenceAuthenticationMethod: string;
```

- *Type:* string

---

##### `maxclients`<sup>Required</sup> <a name="maxclients" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxclients"></a>

```typescript
public readonly maxclients: number;
```

- *Type:* number

---

##### `maxfragmentationmemoryReserved`<sup>Required</sup> <a name="maxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved"></a>

```typescript
public readonly maxfragmentationmemoryReserved: number;
```

- *Type:* number

---

##### `maxmemoryDelta`<sup>Required</sup> <a name="maxmemoryDelta" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta"></a>

```typescript
public readonly maxmemoryDelta: number;
```

- *Type:* number

---

##### `maxmemoryPolicy`<sup>Required</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy"></a>

```typescript
public readonly maxmemoryPolicy: string;
```

- *Type:* string

---

##### `maxmemoryReserved`<sup>Required</sup> <a name="maxmemoryReserved" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved"></a>

```typescript
public readonly maxmemoryReserved: number;
```

- *Type:* number

---

##### `notifyKeyspaceEvents`<sup>Required</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents"></a>

```typescript
public readonly notifyKeyspaceEvents: string;
```

- *Type:* string

---

##### `rdbBackupEnabled`<sup>Required</sup> <a name="rdbBackupEnabled" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled"></a>

```typescript
public readonly rdbBackupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rdbBackupFrequency`<sup>Required</sup> <a name="rdbBackupFrequency" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency"></a>

```typescript
public readonly rdbBackupFrequency: number;
```

- *Type:* number

---

##### `rdbBackupMaxSnapshotCount`<sup>Required</sup> <a name="rdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount"></a>

```typescript
public readonly rdbBackupMaxSnapshotCount: number;
```

- *Type:* number

---

##### `rdbStorageConnectionString`<sup>Required</sup> <a name="rdbStorageConnectionString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString"></a>

```typescript
public readonly rdbStorageConnectionString: string;
```

- *Type:* string

---

##### `storageAccountSubscriptionId`<sup>Required</sup> <a name="storageAccountSubscriptionId" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId"></a>

```typescript
public readonly storageAccountSubscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRedisCacheRedisConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheRedisConfiguration">DataAzurermRedisCacheRedisConfiguration</a>

---


### DataAzurermRedisCacheTimeoutsOutputReference <a name="DataAzurermRedisCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRedisCache } from '@cdktf/provider-azurerm'

new dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts">DataAzurermRedisCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermRedisCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermRedisCache.DataAzurermRedisCacheTimeouts">DataAzurermRedisCacheTimeouts</a>

---



