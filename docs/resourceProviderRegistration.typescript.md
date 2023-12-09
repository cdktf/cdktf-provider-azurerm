# `resourceProviderRegistration` Submodule <a name="`resourceProviderRegistration` Submodule" id="@cdktf/provider-azurerm.resourceProviderRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceProviderRegistration <a name="ResourceProviderRegistration" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration azurerm_resource_provider_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.Initializer"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

new resourceProviderRegistration.ResourceProviderRegistration(scope: Construct, id: string, config: ResourceProviderRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig">ResourceProviderRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig">ResourceProviderRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.putFeature">putFeature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetFeature">resetFeature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeature` <a name="putFeature" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.putFeature"></a>

```typescript
public putFeature(value: IResolvable | ResourceProviderRegistrationFeature[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.putFeature.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceProviderRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts">ResourceProviderRegistrationTimeouts</a>

---

##### `resetFeature` <a name="resetFeature" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetFeature"></a>

```typescript
public resetFeature(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceProviderRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isConstruct"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

resourceProviderRegistration.ResourceProviderRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isTerraformElement"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

resourceProviderRegistration.ResourceProviderRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isTerraformResource"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

resourceProviderRegistration.ResourceProviderRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.generateConfigForImport"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

resourceProviderRegistration.ResourceProviderRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ResourceProviderRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceProviderRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceProviderRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceProviderRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.feature">feature</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList">ResourceProviderRegistrationFeatureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference">ResourceProviderRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.featureInput">featureInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts">ResourceProviderRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.feature"></a>

```typescript
public readonly feature: ResourceProviderRegistrationFeatureList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList">ResourceProviderRegistrationFeatureList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceProviderRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference">ResourceProviderRegistrationTimeoutsOutputReference</a>

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.featureInput"></a>

```typescript
public readonly featureInput: IResolvable | ResourceProviderRegistrationFeature[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceProviderRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts">ResourceProviderRegistrationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceProviderRegistrationConfig <a name="ResourceProviderRegistrationConfig" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.Initializer"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

const resourceProviderRegistrationConfig: resourceProviderRegistration.ResourceProviderRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#name ResourceProviderRegistration#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.feature">feature</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>[]</code> | feature block. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#id ResourceProviderRegistration#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts">ResourceProviderRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#name ResourceProviderRegistration#name}.

---

##### `feature`<sup>Optional</sup> <a name="feature" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.feature"></a>

```typescript
public readonly feature: IResolvable | ResourceProviderRegistrationFeature[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>[]

feature block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#feature ResourceProviderRegistration#feature}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#id ResourceProviderRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceProviderRegistrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts">ResourceProviderRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#timeouts ResourceProviderRegistration#timeouts}

---

### ResourceProviderRegistrationFeature <a name="ResourceProviderRegistrationFeature" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature.Initializer"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

const resourceProviderRegistrationFeature: resourceProviderRegistration.ResourceProviderRegistrationFeature = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#name ResourceProviderRegistration#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature.property.registered">registered</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#registered ResourceProviderRegistration#registered}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#name ResourceProviderRegistration#name}.

---

##### `registered`<sup>Required</sup> <a name="registered" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature.property.registered"></a>

```typescript
public readonly registered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#registered ResourceProviderRegistration#registered}.

---

### ResourceProviderRegistrationTimeouts <a name="ResourceProviderRegistrationTimeouts" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.Initializer"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

const resourceProviderRegistrationTimeouts: resourceProviderRegistration.ResourceProviderRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#create ResourceProviderRegistration#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#delete ResourceProviderRegistration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#read ResourceProviderRegistration#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#update ResourceProviderRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#create ResourceProviderRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#delete ResourceProviderRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#read ResourceProviderRegistration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/resource_provider_registration#update ResourceProviderRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceProviderRegistrationFeatureList <a name="ResourceProviderRegistrationFeatureList" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.Initializer"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

new resourceProviderRegistration.ResourceProviderRegistrationFeatureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.get"></a>

```typescript
public get(index: number): ResourceProviderRegistrationFeatureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceProviderRegistrationFeature[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>[]

---


### ResourceProviderRegistrationFeatureOutputReference <a name="ResourceProviderRegistrationFeatureOutputReference" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

new resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.registeredInput">registeredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.registered">registered</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `registeredInput`<sup>Optional</sup> <a name="registeredInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.registeredInput"></a>

```typescript
public readonly registeredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `registered`<sup>Required</sup> <a name="registered" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.registered"></a>

```typescript
public readonly registered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeatureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceProviderRegistrationFeature;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationFeature">ResourceProviderRegistrationFeature</a>

---


### ResourceProviderRegistrationTimeoutsOutputReference <a name="ResourceProviderRegistrationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceProviderRegistration } from '@cdktf/provider-azurerm'

new resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts">ResourceProviderRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceProviderRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceProviderRegistration.ResourceProviderRegistrationTimeouts">ResourceProviderRegistrationTimeouts</a>

---



