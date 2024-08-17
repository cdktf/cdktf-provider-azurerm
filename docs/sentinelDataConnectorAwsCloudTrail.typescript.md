# `sentinelDataConnectorAwsCloudTrail` Submodule <a name="`sentinelDataConnectorAwsCloudTrail` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorAwsCloudTrail <a name="SentinelDataConnectorAwsCloudTrail" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail azurerm_sentinel_data_connector_aws_cloud_trail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

new sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail(scope: Construct, id: string, config: SentinelDataConnectorAwsCloudTrailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig">SentinelDataConnectorAwsCloudTrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig">SentinelDataConnectorAwsCloudTrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelDataConnectorAwsCloudTrailTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorAwsCloudTrail resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelDataConnectorAwsCloudTrail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorAwsCloudTrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorAwsCloudTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorAwsCloudTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference">SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference">SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference</a>

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArnInput"></a>

```typescript
public readonly awsRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelDataConnectorAwsCloudTrailTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorAwsCloudTrailConfig <a name="SentinelDataConnectorAwsCloudTrailConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.Initializer"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

const sentinelDataConnectorAwsCloudTrailConfig: sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorAwsCloudTrailTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#timeouts SentinelDataConnectorAwsCloudTrail#timeouts}

---

### SentinelDataConnectorAwsCloudTrailTimeouts <a name="SentinelDataConnectorAwsCloudTrailTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.Initializer"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

const sentinelDataConnectorAwsCloudTrailTimeouts: sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#create SentinelDataConnectorAwsCloudTrail#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#delete SentinelDataConnectorAwsCloudTrail#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#read SentinelDataConnectorAwsCloudTrail#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#update SentinelDataConnectorAwsCloudTrail#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#create SentinelDataConnectorAwsCloudTrail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#delete SentinelDataConnectorAwsCloudTrail#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#read SentinelDataConnectorAwsCloudTrail#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sentinel_data_connector_aws_cloud_trail#update SentinelDataConnectorAwsCloudTrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference <a name="SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelDataConnectorAwsCloudTrail } from '@cdktf/provider-azurerm'

new sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelDataConnectorAwsCloudTrailTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

---



