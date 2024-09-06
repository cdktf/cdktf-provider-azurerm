# `containerAppEnvironmentCustomDomain` Submodule <a name="`containerAppEnvironmentCustomDomain` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentCustomDomain <a name="ContainerAppEnvironmentCustomDomain" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain azurerm_container_app_environment_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

new containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain(scope: Construct, id: string, config: ContainerAppEnvironmentCustomDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig">ContainerAppEnvironmentCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig">ContainerAppEnvironmentCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAppEnvironmentCustomDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppEnvironmentCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isConstruct"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformElement"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformResource"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerAppEnvironmentCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAppEnvironmentCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAppEnvironmentCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference">ContainerAppEnvironmentCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64Input">certificateBlobBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffixInput">dnsSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64">certificateBlobBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffix">dnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppEnvironmentCustomDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference">ContainerAppEnvironmentCustomDomainTimeoutsOutputReference</a>

---

##### `certificateBlobBase64Input`<sup>Optional</sup> <a name="certificateBlobBase64Input" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64Input"></a>

```typescript
public readonly certificateBlobBase64Input: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentIdInput"></a>

```typescript
public readonly containerAppEnvironmentIdInput: string;
```

- *Type:* string

---

##### `dnsSuffixInput`<sup>Optional</sup> <a name="dnsSuffixInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffixInput"></a>

```typescript
public readonly dnsSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAppEnvironmentCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a>

---

##### `certificateBlobBase64`<sup>Required</sup> <a name="certificateBlobBase64" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64"></a>

```typescript
public readonly certificateBlobBase64: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentId"></a>

```typescript
public readonly containerAppEnvironmentId: string;
```

- *Type:* string

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffix"></a>

```typescript
public readonly dnsSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentCustomDomainConfig <a name="ContainerAppEnvironmentCustomDomainConfig" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.Initializer"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

const containerAppEnvironmentCustomDomainConfig: containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificateBlobBase64">certificateBlobBase64</a></code> | <code>string</code> | The Custom Domain Certificate Private Key as a base64 encoded PFX or PEM. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | The Custom Domain Certificate password. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>string</code> | The Container App Managed Environment ID to configure this Custom Domain on. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dnsSuffix">dnsSuffix</a></code> | <code>string</code> | The Custom Domain DNS suffix for this Container App Environment. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#id ContainerAppEnvironmentCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateBlobBase64`<sup>Required</sup> <a name="certificateBlobBase64" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificateBlobBase64"></a>

```typescript
public readonly certificateBlobBase64: string;
```

- *Type:* string

The Custom Domain Certificate Private Key as a base64 encoded PFX or PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#certificate_blob_base64 ContainerAppEnvironmentCustomDomain#certificate_blob_base64}

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

The Custom Domain Certificate password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#certificate_password ContainerAppEnvironmentCustomDomain#certificate_password}

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.containerAppEnvironmentId"></a>

```typescript
public readonly containerAppEnvironmentId: string;
```

- *Type:* string

The Container App Managed Environment ID to configure this Custom Domain on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#container_app_environment_id ContainerAppEnvironmentCustomDomain#container_app_environment_id}

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dnsSuffix"></a>

```typescript
public readonly dnsSuffix: string;
```

- *Type:* string

The Custom Domain DNS suffix for this Container App Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#dns_suffix ContainerAppEnvironmentCustomDomain#dns_suffix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#id ContainerAppEnvironmentCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppEnvironmentCustomDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#timeouts ContainerAppEnvironmentCustomDomain#timeouts}

---

### ContainerAppEnvironmentCustomDomainTimeouts <a name="ContainerAppEnvironmentCustomDomainTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.Initializer"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

const containerAppEnvironmentCustomDomainTimeouts: containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#create ContainerAppEnvironmentCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#delete ContainerAppEnvironmentCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#read ContainerAppEnvironmentCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#update ContainerAppEnvironmentCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#create ContainerAppEnvironmentCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#delete ContainerAppEnvironmentCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#read ContainerAppEnvironmentCustomDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/container_app_environment_custom_domain#update ContainerAppEnvironmentCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentCustomDomainTimeoutsOutputReference <a name="ContainerAppEnvironmentCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAppEnvironmentCustomDomain } from '@cdktf/provider-azurerm'

new containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppEnvironmentCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a>

---



