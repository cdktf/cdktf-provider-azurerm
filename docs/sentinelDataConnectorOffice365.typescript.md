# `sentinelDataConnectorOffice365` Submodule <a name="`sentinelDataConnectorOffice365` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorOffice365 <a name="SentinelDataConnectorOffice365" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365 azurerm_sentinel_data_connector_office_365}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

new sentinelDataConnectorOffice365.SentinelDataConnectorOffice365(scope: Construct, id: string, config: SentinelDataConnectorOffice365Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config">SentinelDataConnectorOffice365Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config">SentinelDataConnectorOffice365Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetExchangeEnabled">resetExchangeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetSharepointEnabled">resetSharepointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTeamsEnabled">resetTeamsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelDataConnectorOffice365Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a>

---

##### `resetExchangeEnabled` <a name="resetExchangeEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetExchangeEnabled"></a>

```typescript
public resetExchangeEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSharepointEnabled` <a name="resetSharepointEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetSharepointEnabled"></a>

```typescript
public resetSharepointEnabled(): void
```

##### `resetTeamsEnabled` <a name="resetTeamsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTeamsEnabled"></a>

```typescript
public resetTeamsEnabled(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorOffice365 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isConstruct"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformElement"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformResource"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelDataConnectorOffice365 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorOffice365 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorOffice365 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorOffice365 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference">SentinelDataConnectorOffice365TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabledInput">exchangeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabledInput">sharepointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabledInput">teamsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabled">exchangeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabled">sharepointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabled">teamsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorOffice365TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference">SentinelDataConnectorOffice365TimeoutsOutputReference</a>

---

##### `exchangeEnabledInput`<sup>Optional</sup> <a name="exchangeEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabledInput"></a>

```typescript
public readonly exchangeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sharepointEnabledInput`<sup>Optional</sup> <a name="sharepointEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabledInput"></a>

```typescript
public readonly sharepointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teamsEnabledInput`<sup>Optional</sup> <a name="teamsEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabledInput"></a>

```typescript
public readonly teamsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelDataConnectorOffice365Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a>

---

##### `exchangeEnabled`<sup>Required</sup> <a name="exchangeEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabled"></a>

```typescript
public readonly exchangeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharepointEnabled`<sup>Required</sup> <a name="sharepointEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabled"></a>

```typescript
public readonly sharepointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teamsEnabled`<sup>Required</sup> <a name="teamsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabled"></a>

```typescript
public readonly teamsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorOffice365Config <a name="SentinelDataConnectorOffice365Config" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.Initializer"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

const sentinelDataConnectorOffice365Config: sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#log_analytics_workspace_id SentinelDataConnectorOffice365#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#name SentinelDataConnectorOffice365#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.exchangeEnabled">exchangeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#exchange_enabled SentinelDataConnectorOffice365#exchange_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#id SentinelDataConnectorOffice365#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.sharepointEnabled">sharepointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#sharepoint_enabled SentinelDataConnectorOffice365#sharepoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.teamsEnabled">teamsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#teams_enabled SentinelDataConnectorOffice365#teams_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#tenant_id SentinelDataConnectorOffice365#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#log_analytics_workspace_id SentinelDataConnectorOffice365#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#name SentinelDataConnectorOffice365#name}.

---

##### `exchangeEnabled`<sup>Optional</sup> <a name="exchangeEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.exchangeEnabled"></a>

```typescript
public readonly exchangeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#exchange_enabled SentinelDataConnectorOffice365#exchange_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#id SentinelDataConnectorOffice365#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharepointEnabled`<sup>Optional</sup> <a name="sharepointEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.sharepointEnabled"></a>

```typescript
public readonly sharepointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#sharepoint_enabled SentinelDataConnectorOffice365#sharepoint_enabled}.

---

##### `teamsEnabled`<sup>Optional</sup> <a name="teamsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.teamsEnabled"></a>

```typescript
public readonly teamsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#teams_enabled SentinelDataConnectorOffice365#teams_enabled}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#tenant_id SentinelDataConnectorOffice365#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorOffice365Timeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#timeouts SentinelDataConnectorOffice365#timeouts}

---

### SentinelDataConnectorOffice365Timeouts <a name="SentinelDataConnectorOffice365Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.Initializer"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

const sentinelDataConnectorOffice365Timeouts: sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#create SentinelDataConnectorOffice365#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#delete SentinelDataConnectorOffice365#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#read SentinelDataConnectorOffice365#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#update SentinelDataConnectorOffice365#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#create SentinelDataConnectorOffice365#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#delete SentinelDataConnectorOffice365#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#read SentinelDataConnectorOffice365#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/sentinel_data_connector_office_365#update SentinelDataConnectorOffice365#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorOffice365TimeoutsOutputReference <a name="SentinelDataConnectorOffice365TimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelDataConnectorOffice365 } from '@cdktf/provider-azurerm'

new sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelDataConnectorOffice365Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a>

---



