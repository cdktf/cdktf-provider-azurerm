# `elasticCloudElasticsearch` Submodule <a name="`elasticCloudElasticsearch` Submodule" id="@cdktf/provider-azurerm.elasticCloudElasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticCloudElasticsearch <a name="ElasticCloudElasticsearch" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

new elasticCloudElasticsearch.ElasticCloudElasticsearch(scope: Construct, id: string, config: ElasticCloudElasticsearchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig">ElasticCloudElasticsearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig">ElasticCloudElasticsearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetMonitoringEnabled">resetMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogs` <a name="putLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs"></a>

```typescript
public putLogs(value: ElasticCloudElasticsearchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticCloudElasticsearchTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetLogs"></a>

```typescript
public resetLogs(): void
```

##### `resetMonitoringEnabled` <a name="resetMonitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetMonitoringEnabled"></a>

```typescript
public resetMonitoringEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticCloudElasticsearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticCloudElasticsearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticCloudElasticsearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudDeploymentId">elasticCloudDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl">elasticCloudSsoDefaultUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudUserId">elasticCloudUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticsearchServiceUrl">elasticsearchServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaServiceUrl">kibanaServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaSsoUri">kibanaSsoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference">ElasticCloudElasticsearchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference">ElasticCloudElasticsearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddressInput">elasticCloudEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabledInput">monitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddress">elasticCloudEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabled">monitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticCloudDeploymentId`<sup>Required</sup> <a name="elasticCloudDeploymentId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudDeploymentId"></a>

```typescript
public readonly elasticCloudDeploymentId: string;
```

- *Type:* string

---

##### `elasticCloudSsoDefaultUrl`<sup>Required</sup> <a name="elasticCloudSsoDefaultUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl"></a>

```typescript
public readonly elasticCloudSsoDefaultUrl: string;
```

- *Type:* string

---

##### `elasticCloudUserId`<sup>Required</sup> <a name="elasticCloudUserId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudUserId"></a>

```typescript
public readonly elasticCloudUserId: string;
```

- *Type:* string

---

##### `elasticsearchServiceUrl`<sup>Required</sup> <a name="elasticsearchServiceUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticsearchServiceUrl"></a>

```typescript
public readonly elasticsearchServiceUrl: string;
```

- *Type:* string

---

##### `kibanaServiceUrl`<sup>Required</sup> <a name="kibanaServiceUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaServiceUrl"></a>

```typescript
public readonly kibanaServiceUrl: string;
```

- *Type:* string

---

##### `kibanaSsoUri`<sup>Required</sup> <a name="kibanaSsoUri" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaSsoUri"></a>

```typescript
public readonly kibanaSsoUri: string;
```

- *Type:* string

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logs"></a>

```typescript
public readonly logs: ElasticCloudElasticsearchLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference">ElasticCloudElasticsearchLogsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticCloudElasticsearchTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference">ElasticCloudElasticsearchTimeoutsOutputReference</a>

---

##### `elasticCloudEmailAddressInput`<sup>Optional</sup> <a name="elasticCloudEmailAddressInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddressInput"></a>

```typescript
public readonly elasticCloudEmailAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logsInput"></a>

```typescript
public readonly logsInput: ElasticCloudElasticsearchLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---

##### `monitoringEnabledInput`<sup>Optional</sup> <a name="monitoringEnabledInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabledInput"></a>

```typescript
public readonly monitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ElasticCloudElasticsearchTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

---

##### `elasticCloudEmailAddress`<sup>Required</sup> <a name="elasticCloudEmailAddress" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddress"></a>

```typescript
public readonly elasticCloudEmailAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `monitoringEnabled`<sup>Required</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabled"></a>

```typescript
public readonly monitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticCloudElasticsearchConfig <a name="ElasticCloudElasticsearchConfig" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

const elasticCloudElasticsearchConfig: elasticCloudElasticsearch.ElasticCloudElasticsearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.elasticCloudEmailAddress">elasticCloudEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.monitoringEnabled">monitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticCloudEmailAddress`<sup>Required</sup> <a name="elasticCloudEmailAddress" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.elasticCloudEmailAddress"></a>

```typescript
public readonly elasticCloudEmailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.logs"></a>

```typescript
public readonly logs: ElasticCloudElasticsearchLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#logs ElasticCloudElasticsearch#logs}

---

##### `monitoringEnabled`<sup>Optional</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.monitoringEnabled"></a>

```typescript
public readonly monitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticCloudElasticsearchTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#timeouts ElasticCloudElasticsearch#timeouts}

---

### ElasticCloudElasticsearchLogs <a name="ElasticCloudElasticsearchLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

const elasticCloudElasticsearchLogs: elasticCloudElasticsearch.ElasticCloudElasticsearchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.filteringTag">filteringTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>[]</code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendActivityLogs">sendActivityLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#send_activity_logs ElasticCloudElasticsearch#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendAzureadLogs">sendAzureadLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#send_azuread_logs ElasticCloudElasticsearch#send_azuread_logs}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#send_subscription_logs ElasticCloudElasticsearch#send_subscription_logs}. |

---

##### `filteringTag`<sup>Optional</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.filteringTag"></a>

```typescript
public readonly filteringTag: IResolvable | ElasticCloudElasticsearchLogsFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>[]

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#filtering_tag ElasticCloudElasticsearch#filtering_tag}

---

##### `sendActivityLogs`<sup>Optional</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendActivityLogs"></a>

```typescript
public readonly sendActivityLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#send_activity_logs ElasticCloudElasticsearch#send_activity_logs}.

---

##### `sendAzureadLogs`<sup>Optional</sup> <a name="sendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendAzureadLogs"></a>

```typescript
public readonly sendAzureadLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#send_azuread_logs ElasticCloudElasticsearch#send_azuread_logs}.

---

##### `sendSubscriptionLogs`<sup>Optional</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendSubscriptionLogs"></a>

```typescript
public readonly sendSubscriptionLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#send_subscription_logs ElasticCloudElasticsearch#send_subscription_logs}.

---

### ElasticCloudElasticsearchLogsFilteringTag <a name="ElasticCloudElasticsearchLogsFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

const elasticCloudElasticsearchLogsFilteringTag: elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#action ElasticCloudElasticsearch#action}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#value ElasticCloudElasticsearch#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#action ElasticCloudElasticsearch#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#value ElasticCloudElasticsearch#value}.

---

### ElasticCloudElasticsearchTimeouts <a name="ElasticCloudElasticsearchTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

const elasticCloudElasticsearchTimeouts: elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#create ElasticCloudElasticsearch#create}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#delete ElasticCloudElasticsearch#delete}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#read ElasticCloudElasticsearch#read}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#update ElasticCloudElasticsearch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#create ElasticCloudElasticsearch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#delete ElasticCloudElasticsearch#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#read ElasticCloudElasticsearch#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/elastic_cloud_elasticsearch#update ElasticCloudElasticsearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticCloudElasticsearchLogsFilteringTagList <a name="ElasticCloudElasticsearchLogsFilteringTagList" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

new elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get"></a>

```typescript
public get(index: number): ElasticCloudElasticsearchLogsFilteringTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticCloudElasticsearchLogsFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>[]

---


### ElasticCloudElasticsearchLogsFilteringTagOutputReference <a name="ElasticCloudElasticsearchLogsFilteringTagOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

new elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticCloudElasticsearchLogsFilteringTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>

---


### ElasticCloudElasticsearchLogsOutputReference <a name="ElasticCloudElasticsearchLogsOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

new elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag">putFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetFilteringTag">resetFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendActivityLogs">resetSendActivityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendAzureadLogs">resetSendAzureadLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendSubscriptionLogs">resetSendSubscriptionLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilteringTag` <a name="putFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag"></a>

```typescript
public putFilteringTag(value: IResolvable | ElasticCloudElasticsearchLogsFilteringTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>[]

---

##### `resetFilteringTag` <a name="resetFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetFilteringTag"></a>

```typescript
public resetFilteringTag(): void
```

##### `resetSendActivityLogs` <a name="resetSendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendActivityLogs"></a>

```typescript
public resetSendActivityLogs(): void
```

##### `resetSendAzureadLogs` <a name="resetSendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendAzureadLogs"></a>

```typescript
public resetSendAzureadLogs(): void
```

##### `resetSendSubscriptionLogs` <a name="resetSendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendSubscriptionLogs"></a>

```typescript
public resetSendSubscriptionLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTag">filteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList">ElasticCloudElasticsearchLogsFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTagInput">filteringTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogsInput">sendActivityLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogsInput">sendAzureadLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogsInput">sendSubscriptionLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs">sendActivityLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs">sendAzureadLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTag"></a>

```typescript
public readonly filteringTag: ElasticCloudElasticsearchLogsFilteringTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList">ElasticCloudElasticsearchLogsFilteringTagList</a>

---

##### `filteringTagInput`<sup>Optional</sup> <a name="filteringTagInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTagInput"></a>

```typescript
public readonly filteringTagInput: IResolvable | ElasticCloudElasticsearchLogsFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag">ElasticCloudElasticsearchLogsFilteringTag</a>[]

---

##### `sendActivityLogsInput`<sup>Optional</sup> <a name="sendActivityLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogsInput"></a>

```typescript
public readonly sendActivityLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendAzureadLogsInput`<sup>Optional</sup> <a name="sendAzureadLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogsInput"></a>

```typescript
public readonly sendAzureadLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendSubscriptionLogsInput`<sup>Optional</sup> <a name="sendSubscriptionLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogsInput"></a>

```typescript
public readonly sendSubscriptionLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendActivityLogs`<sup>Required</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs"></a>

```typescript
public readonly sendActivityLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendAzureadLogs`<sup>Required</sup> <a name="sendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs"></a>

```typescript
public readonly sendAzureadLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendSubscriptionLogs`<sup>Required</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs"></a>

```typescript
public readonly sendSubscriptionLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticCloudElasticsearchLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---


### ElasticCloudElasticsearchTimeoutsOutputReference <a name="ElasticCloudElasticsearchTimeoutsOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticCloudElasticsearch } from '@cdktf/provider-azurerm'

new elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticCloudElasticsearchTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

---



