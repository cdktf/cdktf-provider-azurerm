# `eventgridPartnerConfiguration` Submodule <a name="`eventgridPartnerConfiguration` Submodule" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridPartnerConfiguration <a name="EventgridPartnerConfiguration" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration azurerm_eventgrid_partner_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

new eventgridPartnerConfiguration.EventgridPartnerConfiguration(scope: Construct, id: string, config: EventgridPartnerConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig">EventgridPartnerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig">EventgridPartnerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization">putPartnerAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetDefaultMaximumExpirationTimeInDays">resetDefaultMaximumExpirationTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetPartnerAuthorization">resetPartnerAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartnerAuthorization` <a name="putPartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization"></a>

```typescript
public putPartnerAuthorization(value: IResolvable | EventgridPartnerConfigurationPartnerAuthorization[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: EventgridPartnerConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

---

##### `resetDefaultMaximumExpirationTimeInDays` <a name="resetDefaultMaximumExpirationTimeInDays" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetDefaultMaximumExpirationTimeInDays"></a>

```typescript
public resetDefaultMaximumExpirationTimeInDays(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartnerAuthorization` <a name="resetPartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetPartnerAuthorization"></a>

```typescript
public resetPartnerAuthorization(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridPartnerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventgridPartnerConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventgridPartnerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventgridPartnerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventgridPartnerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorization">partnerAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList">EventgridPartnerConfigurationPartnerAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference">EventgridPartnerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDaysInput">defaultMaximumExpirationTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorizationInput">partnerAuthorizationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDays">defaultMaximumExpirationTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `partnerAuthorization`<sup>Required</sup> <a name="partnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorization"></a>

```typescript
public readonly partnerAuthorization: EventgridPartnerConfigurationPartnerAuthorizationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList">EventgridPartnerConfigurationPartnerAuthorizationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: EventgridPartnerConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference">EventgridPartnerConfigurationTimeoutsOutputReference</a>

---

##### `defaultMaximumExpirationTimeInDaysInput`<sup>Optional</sup> <a name="defaultMaximumExpirationTimeInDaysInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDaysInput"></a>

```typescript
public readonly defaultMaximumExpirationTimeInDaysInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `partnerAuthorizationInput`<sup>Optional</sup> <a name="partnerAuthorizationInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorizationInput"></a>

```typescript
public readonly partnerAuthorizationInput: IResolvable | EventgridPartnerConfigurationPartnerAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventgridPartnerConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

---

##### `defaultMaximumExpirationTimeInDays`<sup>Required</sup> <a name="defaultMaximumExpirationTimeInDays" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDays"></a>

```typescript
public readonly defaultMaximumExpirationTimeInDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridPartnerConfigurationConfig <a name="EventgridPartnerConfigurationConfig" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.Initializer"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

const eventgridPartnerConfigurationConfig: eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.defaultMaximumExpirationTimeInDays">defaultMaximumExpirationTimeInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.partnerAuthorization">partnerAuthorization</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>[]</code> | partner_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}.

---

##### `defaultMaximumExpirationTimeInDays`<sup>Optional</sup> <a name="defaultMaximumExpirationTimeInDays" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.defaultMaximumExpirationTimeInDays"></a>

```typescript
public readonly defaultMaximumExpirationTimeInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partnerAuthorization`<sup>Optional</sup> <a name="partnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.partnerAuthorization"></a>

```typescript
public readonly partnerAuthorization: IResolvable | EventgridPartnerConfigurationPartnerAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>[]

partner_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#partner_authorization EventgridPartnerConfiguration#partner_authorization}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventgridPartnerConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#timeouts EventgridPartnerConfiguration#timeouts}

---

### EventgridPartnerConfigurationPartnerAuthorization <a name="EventgridPartnerConfigurationPartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.Initializer"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

const eventgridPartnerConfigurationPartnerAuthorization: eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerName">partnerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#partner_name EventgridPartnerConfiguration#partner_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerRegistrationId">partnerRegistrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#partner_registration_id EventgridPartnerConfiguration#partner_registration_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.authorizationExpirationTimeInUtc">authorizationExpirationTimeInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#authorization_expiration_time_in_utc EventgridPartnerConfiguration#authorization_expiration_time_in_utc}. |

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerName"></a>

```typescript
public readonly partnerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#partner_name EventgridPartnerConfiguration#partner_name}.

---

##### `partnerRegistrationId`<sup>Required</sup> <a name="partnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerRegistrationId"></a>

```typescript
public readonly partnerRegistrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#partner_registration_id EventgridPartnerConfiguration#partner_registration_id}.

---

##### `authorizationExpirationTimeInUtc`<sup>Optional</sup> <a name="authorizationExpirationTimeInUtc" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.authorizationExpirationTimeInUtc"></a>

```typescript
public readonly authorizationExpirationTimeInUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#authorization_expiration_time_in_utc EventgridPartnerConfiguration#authorization_expiration_time_in_utc}.

---

### EventgridPartnerConfigurationTimeouts <a name="EventgridPartnerConfigurationTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.Initializer"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

const eventgridPartnerConfigurationTimeouts: eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#create EventgridPartnerConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#delete EventgridPartnerConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#read EventgridPartnerConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#update EventgridPartnerConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#create EventgridPartnerConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#delete EventgridPartnerConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#read EventgridPartnerConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_partner_configuration#update EventgridPartnerConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridPartnerConfigurationPartnerAuthorizationList <a name="EventgridPartnerConfigurationPartnerAuthorizationList" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

new eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get"></a>

```typescript
public get(index: number): EventgridPartnerConfigurationPartnerAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridPartnerConfigurationPartnerAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>[]

---


### EventgridPartnerConfigurationPartnerAuthorizationOutputReference <a name="EventgridPartnerConfigurationPartnerAuthorizationOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

new eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resetAuthorizationExpirationTimeInUtc">resetAuthorizationExpirationTimeInUtc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationExpirationTimeInUtc` <a name="resetAuthorizationExpirationTimeInUtc" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resetAuthorizationExpirationTimeInUtc"></a>

```typescript
public resetAuthorizationExpirationTimeInUtc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtcInput">authorizationExpirationTimeInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerNameInput">partnerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationIdInput">partnerRegistrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtc">authorizationExpirationTimeInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerName">partnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationId">partnerRegistrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationExpirationTimeInUtcInput`<sup>Optional</sup> <a name="authorizationExpirationTimeInUtcInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtcInput"></a>

```typescript
public readonly authorizationExpirationTimeInUtcInput: string;
```

- *Type:* string

---

##### `partnerNameInput`<sup>Optional</sup> <a name="partnerNameInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerNameInput"></a>

```typescript
public readonly partnerNameInput: string;
```

- *Type:* string

---

##### `partnerRegistrationIdInput`<sup>Optional</sup> <a name="partnerRegistrationIdInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationIdInput"></a>

```typescript
public readonly partnerRegistrationIdInput: string;
```

- *Type:* string

---

##### `authorizationExpirationTimeInUtc`<sup>Required</sup> <a name="authorizationExpirationTimeInUtc" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtc"></a>

```typescript
public readonly authorizationExpirationTimeInUtc: string;
```

- *Type:* string

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerName"></a>

```typescript
public readonly partnerName: string;
```

- *Type:* string

---

##### `partnerRegistrationId`<sup>Required</sup> <a name="partnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationId"></a>

```typescript
public readonly partnerRegistrationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridPartnerConfigurationPartnerAuthorization;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>

---


### EventgridPartnerConfigurationTimeoutsOutputReference <a name="EventgridPartnerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventgridPartnerConfiguration } from '@cdktf/provider-azurerm'

new eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridPartnerConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

---



