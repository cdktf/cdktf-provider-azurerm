# `digitalTwinsEndpointEventgrid` Submodule <a name="`digitalTwinsEndpointEventgrid` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointEventgrid <a name="DigitalTwinsEndpointEventgrid" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid azurerm_digital_twins_endpoint_eventgrid}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

new digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid(scope: Construct, id: string, config: DigitalTwinsEndpointEventgridConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig">DigitalTwinsEndpointEventgridConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig">DigitalTwinsEndpointEventgridConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret">resetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts"></a>

```typescript
public putTimeouts(value: DigitalTwinsEndpointEventgridTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---

##### `resetDeadLetterStorageSecret` <a name="resetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret"></a>

```typescript
public resetDeadLetterStorageSecret(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DigitalTwinsEndpointEventgrid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DigitalTwinsEndpointEventgrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointEventgrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput">deadLetterStorageSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput">digitalTwinsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput">eventgridTopicEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput">eventgridTopicPrimaryAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput">eventgridTopicSecondaryAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId">digitalTwinsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint">eventgridTopicEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey">eventgridTopicPrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey">eventgridTopicSecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts"></a>

```typescript
public readonly timeouts: DigitalTwinsEndpointEventgridTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a>

---

##### `deadLetterStorageSecretInput`<sup>Optional</sup> <a name="deadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput"></a>

```typescript
public readonly deadLetterStorageSecretInput: string;
```

- *Type:* string

---

##### `digitalTwinsIdInput`<sup>Optional</sup> <a name="digitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput"></a>

```typescript
public readonly digitalTwinsIdInput: string;
```

- *Type:* string

---

##### `eventgridTopicEndpointInput`<sup>Optional</sup> <a name="eventgridTopicEndpointInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput"></a>

```typescript
public readonly eventgridTopicEndpointInput: string;
```

- *Type:* string

---

##### `eventgridTopicPrimaryAccessKeyInput`<sup>Optional</sup> <a name="eventgridTopicPrimaryAccessKeyInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput"></a>

```typescript
public readonly eventgridTopicPrimaryAccessKeyInput: string;
```

- *Type:* string

---

##### `eventgridTopicSecondaryAccessKeyInput`<sup>Optional</sup> <a name="eventgridTopicSecondaryAccessKeyInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput"></a>

```typescript
public readonly eventgridTopicSecondaryAccessKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DigitalTwinsEndpointEventgridTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---

##### `deadLetterStorageSecret`<sup>Required</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret"></a>

```typescript
public readonly deadLetterStorageSecret: string;
```

- *Type:* string

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId"></a>

```typescript
public readonly digitalTwinsId: string;
```

- *Type:* string

---

##### `eventgridTopicEndpoint`<sup>Required</sup> <a name="eventgridTopicEndpoint" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint"></a>

```typescript
public readonly eventgridTopicEndpoint: string;
```

- *Type:* string

---

##### `eventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="eventgridTopicPrimaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey"></a>

```typescript
public readonly eventgridTopicPrimaryAccessKey: string;
```

- *Type:* string

---

##### `eventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="eventgridTopicSecondaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey"></a>

```typescript
public readonly eventgridTopicSecondaryAccessKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointEventgridConfig <a name="DigitalTwinsEndpointEventgridConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.Initializer"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

const digitalTwinsEndpointEventgridConfig: digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId">digitalTwinsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint">eventgridTopicEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey">eventgridTopicPrimaryAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey">eventgridTopicSecondaryAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId"></a>

```typescript
public readonly digitalTwinsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}.

---

##### `eventgridTopicEndpoint`<sup>Required</sup> <a name="eventgridTopicEndpoint" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint"></a>

```typescript
public readonly eventgridTopicEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}.

---

##### `eventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="eventgridTopicPrimaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey"></a>

```typescript
public readonly eventgridTopicPrimaryAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}.

---

##### `eventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="eventgridTopicSecondaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey"></a>

```typescript
public readonly eventgridTopicSecondaryAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret"></a>

```typescript
public readonly deadLetterStorageSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DigitalTwinsEndpointEventgridTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#timeouts DigitalTwinsEndpointEventgrid#timeouts}

---

### DigitalTwinsEndpointEventgridTimeouts <a name="DigitalTwinsEndpointEventgridTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.Initializer"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

const digitalTwinsEndpointEventgridTimeouts: digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointEventgridTimeoutsOutputReference <a name="DigitalTwinsEndpointEventgridTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer"></a>

```typescript
import { digitalTwinsEndpointEventgrid } from '@cdktf/provider-azurerm'

new digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DigitalTwinsEndpointEventgridTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---



