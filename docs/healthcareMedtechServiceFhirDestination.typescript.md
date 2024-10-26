# `healthcareMedtechServiceFhirDestination` Submodule <a name="`healthcareMedtechServiceFhirDestination` Submodule" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareMedtechServiceFhirDestination <a name="HealthcareMedtechServiceFhirDestination" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination azurerm_healthcare_medtech_service_fhir_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.Initializer"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

new healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination(scope: Construct, id: string, config: HealthcareMedtechServiceFhirDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig">HealthcareMedtechServiceFhirDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig">HealthcareMedtechServiceFhirDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareMedtechServiceFhirDestinationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts">HealthcareMedtechServiceFhirDestinationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareMedtechServiceFhirDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isConstruct"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformElement"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformResource"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.generateConfigForImport"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HealthcareMedtechServiceFhirDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareMedtechServiceFhirDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareMedtechServiceFhirDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareMedtechServiceFhirDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference">HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirMappingJsonInput">destinationFhirMappingJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirServiceIdInput">destinationFhirServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationIdentityResolutionTypeInput">destinationIdentityResolutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.medtechServiceIdInput">medtechServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts">HealthcareMedtechServiceFhirDestinationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirMappingJson">destinationFhirMappingJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirServiceId">destinationFhirServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationIdentityResolutionType">destinationIdentityResolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.medtechServiceId">medtechServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference">HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference</a>

---

##### `destinationFhirMappingJsonInput`<sup>Optional</sup> <a name="destinationFhirMappingJsonInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirMappingJsonInput"></a>

```typescript
public readonly destinationFhirMappingJsonInput: string;
```

- *Type:* string

---

##### `destinationFhirServiceIdInput`<sup>Optional</sup> <a name="destinationFhirServiceIdInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirServiceIdInput"></a>

```typescript
public readonly destinationFhirServiceIdInput: string;
```

- *Type:* string

---

##### `destinationIdentityResolutionTypeInput`<sup>Optional</sup> <a name="destinationIdentityResolutionTypeInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationIdentityResolutionTypeInput"></a>

```typescript
public readonly destinationIdentityResolutionTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `medtechServiceIdInput`<sup>Optional</sup> <a name="medtechServiceIdInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.medtechServiceIdInput"></a>

```typescript
public readonly medtechServiceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareMedtechServiceFhirDestinationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts">HealthcareMedtechServiceFhirDestinationTimeouts</a>

---

##### `destinationFhirMappingJson`<sup>Required</sup> <a name="destinationFhirMappingJson" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirMappingJson"></a>

```typescript
public readonly destinationFhirMappingJson: string;
```

- *Type:* string

---

##### `destinationFhirServiceId`<sup>Required</sup> <a name="destinationFhirServiceId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationFhirServiceId"></a>

```typescript
public readonly destinationFhirServiceId: string;
```

- *Type:* string

---

##### `destinationIdentityResolutionType`<sup>Required</sup> <a name="destinationIdentityResolutionType" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.destinationIdentityResolutionType"></a>

```typescript
public readonly destinationIdentityResolutionType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `medtechServiceId`<sup>Required</sup> <a name="medtechServiceId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.medtechServiceId"></a>

```typescript
public readonly medtechServiceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareMedtechServiceFhirDestinationConfig <a name="HealthcareMedtechServiceFhirDestinationConfig" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.Initializer"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

const healthcareMedtechServiceFhirDestinationConfig: healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.destinationFhirMappingJson">destinationFhirMappingJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_fhir_mapping_json HealthcareMedtechServiceFhirDestination#destination_fhir_mapping_json}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.destinationFhirServiceId">destinationFhirServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_fhir_service_id HealthcareMedtechServiceFhirDestination#destination_fhir_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.destinationIdentityResolutionType">destinationIdentityResolutionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_identity_resolution_type HealthcareMedtechServiceFhirDestination#destination_identity_resolution_type}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#location HealthcareMedtechServiceFhirDestination#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.medtechServiceId">medtechServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#medtech_service_id HealthcareMedtechServiceFhirDestination#medtech_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#name HealthcareMedtechServiceFhirDestination#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#id HealthcareMedtechServiceFhirDestination#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts">HealthcareMedtechServiceFhirDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationFhirMappingJson`<sup>Required</sup> <a name="destinationFhirMappingJson" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.destinationFhirMappingJson"></a>

```typescript
public readonly destinationFhirMappingJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_fhir_mapping_json HealthcareMedtechServiceFhirDestination#destination_fhir_mapping_json}.

---

##### `destinationFhirServiceId`<sup>Required</sup> <a name="destinationFhirServiceId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.destinationFhirServiceId"></a>

```typescript
public readonly destinationFhirServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_fhir_service_id HealthcareMedtechServiceFhirDestination#destination_fhir_service_id}.

---

##### `destinationIdentityResolutionType`<sup>Required</sup> <a name="destinationIdentityResolutionType" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.destinationIdentityResolutionType"></a>

```typescript
public readonly destinationIdentityResolutionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_identity_resolution_type HealthcareMedtechServiceFhirDestination#destination_identity_resolution_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#location HealthcareMedtechServiceFhirDestination#location}.

---

##### `medtechServiceId`<sup>Required</sup> <a name="medtechServiceId" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.medtechServiceId"></a>

```typescript
public readonly medtechServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#medtech_service_id HealthcareMedtechServiceFhirDestination#medtech_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#name HealthcareMedtechServiceFhirDestination#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#id HealthcareMedtechServiceFhirDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareMedtechServiceFhirDestinationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts">HealthcareMedtechServiceFhirDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#timeouts HealthcareMedtechServiceFhirDestination#timeouts}

---

### HealthcareMedtechServiceFhirDestinationTimeouts <a name="HealthcareMedtechServiceFhirDestinationTimeouts" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.Initializer"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

const healthcareMedtechServiceFhirDestinationTimeouts: healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#create HealthcareMedtechServiceFhirDestination#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#delete HealthcareMedtechServiceFhirDestination#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#read HealthcareMedtechServiceFhirDestination#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#update HealthcareMedtechServiceFhirDestination#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#create HealthcareMedtechServiceFhirDestination#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#delete HealthcareMedtechServiceFhirDestination#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#read HealthcareMedtechServiceFhirDestination#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/healthcare_medtech_service_fhir_destination#update HealthcareMedtechServiceFhirDestination#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference <a name="HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareMedtechServiceFhirDestination } from '@cdktf/provider-azurerm'

new healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts">HealthcareMedtechServiceFhirDestinationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareMedtechServiceFhirDestinationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareMedtechServiceFhirDestination.HealthcareMedtechServiceFhirDestinationTimeouts">HealthcareMedtechServiceFhirDestinationTimeouts</a>

---



