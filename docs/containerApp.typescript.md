# `containerApp` Submodule <a name="`containerApp` Submodule" id="@cdktf/provider-azurerm.containerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerApp <a name="ContainerApp" id="@cdktf/provider-azurerm.containerApp.ContainerApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app azurerm_container_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerApp(scope: Construct, id: string, config: ContainerAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig">ContainerAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig">ContainerAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr">putDapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry">putRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetDapr">resetDapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetRegistry">resetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetWorkloadProfileName">resetWorkloadProfileName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerApp.ContainerApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDapr` <a name="putDapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr"></a>

```typescript
public putDapr(value: ContainerAppDapr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity"></a>

```typescript
public putIdentity(value: ContainerAppIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress"></a>

```typescript
public putIngress(value: ContainerAppIngress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---

##### `putRegistry` <a name="putRegistry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry"></a>

```typescript
public putRegistry(value: IResolvable | ContainerAppRegistry[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>[]

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret"></a>

```typescript
public putSecret(value: IResolvable | ContainerAppSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>[]

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate"></a>

```typescript
public putTemplate(value: ContainerAppTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

---

##### `resetDapr` <a name="resetDapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetDapr"></a>

```typescript
public resetDapr(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetRegistry"></a>

```typescript
public resetRegistry(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkloadProfileName` <a name="resetWorkloadProfileName" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetWorkloadProfileName"></a>

```typescript
public resetWorkloadProfileName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

containerApp.ContainerApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

containerApp.ContainerApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

containerApp.ContainerApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

containerApp.ContainerApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference">ContainerAppDaprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference">ContainerAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference">ContainerAppIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionFqdn">latestRevisionFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionName">latestRevisionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList">ContainerAppRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList">ContainerAppSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference">ContainerAppTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference">ContainerAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.daprInput">daprInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingressInput">ingressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.registryInput">registryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionModeInput">revisionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.secretInput">secretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.workloadProfileNameInput">workloadProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionMode">revisionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.workloadProfileName">workloadProfileName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `dapr`<sup>Required</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.dapr"></a>

```typescript
public readonly dapr: ContainerAppDaprOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference">ContainerAppDaprOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.identity"></a>

```typescript
public readonly identity: ContainerAppIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference">ContainerAppIdentityOutputReference</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingress"></a>

```typescript
public readonly ingress: ContainerAppIngressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference">ContainerAppIngressOutputReference</a>

---

##### `latestRevisionFqdn`<sup>Required</sup> <a name="latestRevisionFqdn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionFqdn"></a>

```typescript
public readonly latestRevisionFqdn: string;
```

- *Type:* string

---

##### `latestRevisionName`<sup>Required</sup> <a name="latestRevisionName" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionName"></a>

```typescript
public readonly latestRevisionName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.registry"></a>

```typescript
public readonly registry: ContainerAppRegistryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList">ContainerAppRegistryList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.secret"></a>

```typescript
public readonly secret: ContainerAppSecretList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList">ContainerAppSecretList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.template"></a>

```typescript
public readonly template: ContainerAppTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference">ContainerAppTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference">ContainerAppTimeoutsOutputReference</a>

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentIdInput"></a>

```typescript
public readonly containerAppEnvironmentIdInput: string;
```

- *Type:* string

---

##### `daprInput`<sup>Optional</sup> <a name="daprInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.daprInput"></a>

```typescript
public readonly daprInput: ContainerAppDapr;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.identityInput"></a>

```typescript
public readonly identityInput: ContainerAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingressInput"></a>

```typescript
public readonly ingressInput: ContainerAppIngress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.registryInput"></a>

```typescript
public readonly registryInput: IResolvable | ContainerAppRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `revisionModeInput`<sup>Optional</sup> <a name="revisionModeInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionModeInput"></a>

```typescript
public readonly revisionModeInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | ContainerAppSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.templateInput"></a>

```typescript
public readonly templateInput: ContainerAppTemplate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

---

##### `workloadProfileNameInput`<sup>Optional</sup> <a name="workloadProfileNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.workloadProfileNameInput"></a>

```typescript
public readonly workloadProfileNameInput: string;
```

- *Type:* string

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentId"></a>

```typescript
public readonly containerAppEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `revisionMode`<sup>Required</sup> <a name="revisionMode" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionMode"></a>

```typescript
public readonly revisionMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workloadProfileName`<sup>Required</sup> <a name="workloadProfileName" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.workloadProfileName"></a>

```typescript
public readonly workloadProfileName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppConfig <a name="ContainerAppConfig" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppConfig: containerApp.ContainerAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>string</code> | The ID of the Container App Environment to host this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.name">name</a></code> | <code>string</code> | The name for this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.revisionMode">revisionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | dapr block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#id ContainerApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.registry">registry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>[]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.secret">secret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#tags ContainerApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.workloadProfileName">workloadProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#workload_profile_name ContainerApp#workload_profile_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.containerAppEnvironmentId"></a>

```typescript
public readonly containerAppEnvironmentId: string;
```

- *Type:* string

The ID of the Container App Environment to host this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#container_app_environment_id ContainerApp#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}.

---

##### `revisionMode`<sup>Required</sup> <a name="revisionMode" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.revisionMode"></a>

```typescript
public readonly revisionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.template"></a>

```typescript
public readonly template: ContainerAppTemplate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#template ContainerApp#template}

---

##### `dapr`<sup>Optional</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dapr"></a>

```typescript
public readonly dapr: ContainerAppDapr;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

dapr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#dapr ContainerApp#dapr}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#id ContainerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.identity"></a>

```typescript
public readonly identity: ContainerAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.ingress"></a>

```typescript
public readonly ingress: ContainerAppIngress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#ingress ContainerApp#ingress}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.registry"></a>

```typescript
public readonly registry: IResolvable | ContainerAppRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>[]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#registry ContainerApp#registry}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.secret"></a>

```typescript
public readonly secret: IResolvable | ContainerAppSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret ContainerApp#secret}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#tags ContainerApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#timeouts ContainerApp#timeouts}

---

##### `workloadProfileName`<sup>Optional</sup> <a name="workloadProfileName" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.workloadProfileName"></a>

```typescript
public readonly workloadProfileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#workload_profile_name ContainerApp#workload_profile_name}.

---

### ContainerAppDapr <a name="ContainerAppDapr" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppDapr: containerApp.ContainerAppDapr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appId">appId</a></code> | <code>string</code> | The Dapr Application Identifier. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appPort">appPort</a></code> | <code>number</code> | The port which the application is listening on. This is the same as the `ingress` port. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appProtocol">appProtocol</a></code> | <code>string</code> | The protocol for the app. Possible values include `http` and `grpc`. Defaults to `http`. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The Dapr Application Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#app_id ContainerApp#app_id}

---

##### `appPort`<sup>Optional</sup> <a name="appPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appPort"></a>

```typescript
public readonly appPort: number;
```

- *Type:* number

The port which the application is listening on. This is the same as the `ingress` port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#app_port ContainerApp#app_port}

---

##### `appProtocol`<sup>Optional</sup> <a name="appProtocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appProtocol"></a>

```typescript
public readonly appProtocol: string;
```

- *Type:* string

The protocol for the app. Possible values include `http` and `grpc`. Defaults to `http`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#app_protocol ContainerApp#app_protocol}

---

### ContainerAppIdentity <a name="ContainerAppIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppIdentity: containerApp.ContainerAppIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#type ContainerApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#identity_ids ContainerApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#type ContainerApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#identity_ids ContainerApp#identity_ids}.

---

### ContainerAppIngress <a name="ContainerAppIngress" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppIngress: containerApp.ContainerAppIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.targetPort">targetPort</a></code> | <code>number</code> | The target port on the container for the Ingress traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.trafficWeight">trafficWeight</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>[]</code> | traffic_weight block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.allowInsecureConnections">allowInsecureConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should this ingress allow insecure connections? |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.exposedPort">exposedPort</a></code> | <code>number</code> | The exposed port on the container for the Ingress traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.externalEnabled">externalEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is this an external Ingress. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.ipSecurityRestriction">ipSecurityRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>[]</code> | ip_security_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.transport">transport</a></code> | <code>string</code> | The transport method for the Ingress. Possible values include `auto`, `http`, and `http2`, `tcp`. Defaults to `auto`. |

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

The target port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#target_port ContainerApp#target_port}

---

##### `trafficWeight`<sup>Required</sup> <a name="trafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.trafficWeight"></a>

```typescript
public readonly trafficWeight: IResolvable | ContainerAppIngressTrafficWeight[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>[]

traffic_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#traffic_weight ContainerApp#traffic_weight}

---

##### `allowInsecureConnections`<sup>Optional</sup> <a name="allowInsecureConnections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.allowInsecureConnections"></a>

```typescript
public readonly allowInsecureConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should this ingress allow insecure connections?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#allow_insecure_connections ContainerApp#allow_insecure_connections}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.customDomain"></a>

```typescript
public readonly customDomain: ContainerAppIngressCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#custom_domain ContainerApp#custom_domain}

---

##### `exposedPort`<sup>Optional</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.exposedPort"></a>

```typescript
public readonly exposedPort: number;
```

- *Type:* number

The exposed port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#exposed_port ContainerApp#exposed_port}

---

##### `externalEnabled`<sup>Optional</sup> <a name="externalEnabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.externalEnabled"></a>

```typescript
public readonly externalEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is this an external Ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#external_enabled ContainerApp#external_enabled}

---

##### `ipSecurityRestriction`<sup>Optional</sup> <a name="ipSecurityRestriction" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.ipSecurityRestriction"></a>

```typescript
public readonly ipSecurityRestriction: IResolvable | ContainerAppIngressIpSecurityRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>[]

ip_security_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#ip_security_restriction ContainerApp#ip_security_restriction}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

The transport method for the Ingress. Possible values include `auto`, `http`, and `http2`, `tcp`. Defaults to `auto`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#transport ContainerApp#transport}

---

### ContainerAppIngressCustomDomain <a name="ContainerAppIngressCustomDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppIngressCustomDomain: containerApp.ContainerAppIngressCustomDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#certificate_id ContainerApp#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.name">name</a></code> | <code>string</code> | The hostname of the Certificate. Must be the CN or a named SAN in the certificate. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateBindingType">certificateBindingType</a></code> | <code>string</code> | The Binding type. Possible values include `Disabled` and `SniEnabled`. Defaults to `Disabled`. |

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#certificate_id ContainerApp#certificate_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The hostname of the Certificate. Must be the CN or a named SAN in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `certificateBindingType`<sup>Optional</sup> <a name="certificateBindingType" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateBindingType"></a>

```typescript
public readonly certificateBindingType: string;
```

- *Type:* string

The Binding type. Possible values include `Disabled` and `SniEnabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#certificate_binding_type ContainerApp#certificate_binding_type}

---

### ContainerAppIngressIpSecurityRestriction <a name="ContainerAppIngressIpSecurityRestriction" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppIngressIpSecurityRestriction: containerApp.ContainerAppIngressIpSecurityRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.action">action</a></code> | <code>string</code> | The action. Allow or Deny. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | CIDR notation to match incoming IP address. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.name">name</a></code> | <code>string</code> | Name for the IP restriction rule. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.description">description</a></code> | <code>string</code> | Describe the IP restriction rule that is being sent to the container-app. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action. Allow or Deny.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#action ContainerApp#action}

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

CIDR notation to match incoming IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#ip_address_range ContainerApp#ip_address_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for the IP restriction rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describe the IP restriction rule that is being sent to the container-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#description ContainerApp#description}

---

### ContainerAppIngressTrafficWeight <a name="ContainerAppIngressTrafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppIngressTrafficWeight: containerApp.ContainerAppIngressTrafficWeight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic to send to this revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.label">label</a></code> | <code>string</code> | The label to apply to the revision as a name prefix for routing traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.latestRevision">latestRevision</a></code> | <code>boolean \| cdktf.IResolvable</code> | This traffic Weight relates to the latest stable Container Revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.revisionSuffix">revisionSuffix</a></code> | <code>string</code> | The suffix string to append to the revision. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic to send to this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#percentage ContainerApp#percentage}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

The label to apply to the revision as a name prefix for routing traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#label ContainerApp#label}

---

##### `latestRevision`<sup>Optional</sup> <a name="latestRevision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.latestRevision"></a>

```typescript
public readonly latestRevision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This traffic Weight relates to the latest stable Container Revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#latest_revision ContainerApp#latest_revision}

---

##### `revisionSuffix`<sup>Optional</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.revisionSuffix"></a>

```typescript
public readonly revisionSuffix: string;
```

- *Type:* string

The suffix string to append to the revision.

This must be unique for the Container App's lifetime. A default hash created by the service will be used if this value is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#revision_suffix ContainerApp#revision_suffix}

---

### ContainerAppRegistry <a name="ContainerAppRegistry" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppRegistry: containerApp.ContainerAppRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.server">server</a></code> | <code>string</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.identity">identity</a></code> | <code>string</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.passwordSecretName">passwordSecretName</a></code> | <code>string</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.username">username</a></code> | <code>string</code> | The username to use for this Container Registry. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#server ContainerApp#server}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `passwordSecretName`<sup>Optional</sup> <a name="passwordSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.passwordSecretName"></a>

```typescript
public readonly passwordSecretName: string;
```

- *Type:* string

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#password_secret_name ContainerApp#password_secret_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#username ContainerApp#username}

---

### ContainerAppSecret <a name="ContainerAppSecret" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppSecret: containerApp.ContainerAppSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.name">name</a></code> | <code>string</code> | The Secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.value">value</a></code> | <code>string</code> | The value for this secret. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplate <a name="ContainerAppTemplate" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplate: containerApp.ContainerAppTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.container">container</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>[]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.azureQueueScaleRule">azureQueueScaleRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>[]</code> | azure_queue_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.customScaleRule">customScaleRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>[]</code> | custom_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.httpScaleRule">httpScaleRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>[]</code> | http_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.initContainer">initContainer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>[]</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | The maximum number of replicas for this container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.minReplicas">minReplicas</a></code> | <code>number</code> | The minimum number of replicas for this container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.revisionSuffix">revisionSuffix</a></code> | <code>string</code> | The suffix for the revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.tcpScaleRule">tcpScaleRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>[]</code> | tcp_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.volume">volume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>[]</code> | volume block. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.container"></a>

```typescript
public readonly container: IResolvable | ContainerAppTemplateContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#container ContainerApp#container}

---

##### `azureQueueScaleRule`<sup>Optional</sup> <a name="azureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.azureQueueScaleRule"></a>

```typescript
public readonly azureQueueScaleRule: IResolvable | ContainerAppTemplateAzureQueueScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>[]

azure_queue_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#azure_queue_scale_rule ContainerApp#azure_queue_scale_rule}

---

##### `customScaleRule`<sup>Optional</sup> <a name="customScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.customScaleRule"></a>

```typescript
public readonly customScaleRule: IResolvable | ContainerAppTemplateCustomScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>[]

custom_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#custom_scale_rule ContainerApp#custom_scale_rule}

---

##### `httpScaleRule`<sup>Optional</sup> <a name="httpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.httpScaleRule"></a>

```typescript
public readonly httpScaleRule: IResolvable | ContainerAppTemplateHttpScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>[]

http_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#http_scale_rule ContainerApp#http_scale_rule}

---

##### `initContainer`<sup>Optional</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.initContainer"></a>

```typescript
public readonly initContainer: IResolvable | ContainerAppTemplateInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>[]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#init_container ContainerApp#init_container}

---

##### `maxReplicas`<sup>Optional</sup> <a name="maxReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

The maximum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#max_replicas ContainerApp#max_replicas}

---

##### `minReplicas`<sup>Optional</sup> <a name="minReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

The minimum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#min_replicas ContainerApp#min_replicas}

---

##### `revisionSuffix`<sup>Optional</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.revisionSuffix"></a>

```typescript
public readonly revisionSuffix: string;
```

- *Type:* string

The suffix for the revision.

This value must be unique for the lifetime of the Resource. If omitted the service will use a hash function to create one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#revision_suffix ContainerApp#revision_suffix}

---

##### `tcpScaleRule`<sup>Optional</sup> <a name="tcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.tcpScaleRule"></a>

```typescript
public readonly tcpScaleRule: IResolvable | ContainerAppTemplateTcpScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>[]

tcp_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#tcp_scale_rule ContainerApp#tcp_scale_rule}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.volume"></a>

```typescript
public readonly volume: IResolvable | ContainerAppTemplateVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#volume ContainerApp#volume}

---

### ContainerAppTemplateAzureQueueScaleRule <a name="ContainerAppTemplateAzureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateAzureQueueScaleRule: containerApp.ContainerAppTemplateAzureQueueScaleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.authentication">authentication</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>[]</code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueLength">queueLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#queue_length ContainerApp#queue_length}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueName">queueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#queue_name ContainerApp#queue_name}. |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.authentication"></a>

```typescript
public readonly authentication: IResolvable | ContainerAppTemplateAzureQueueScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>[]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `queueLength`<sup>Required</sup> <a name="queueLength" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueLength"></a>

```typescript
public readonly queueLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#queue_length ContainerApp#queue_length}.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#queue_name ContainerApp#queue_name}.

---

### ContainerAppTemplateAzureQueueScaleRuleAuthentication <a name="ContainerAppTemplateAzureQueueScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateAzureQueueScaleRuleAuthentication: containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateContainer <a name="ContainerAppTemplateContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainer: containerApp.ContainerAppTemplateContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.cpu">cpu</a></code> | <code>number</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.image">image</a></code> | <code>string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.memory">memory</a></code> | <code>string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.name">name</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.args">args</a></code> | <code>string[]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.command">command</a></code> | <code>string[]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.livenessProbe">livenessProbe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>[]</code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.readinessProbe">readinessProbe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>[]</code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.startupProbe">startupProbe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>[]</code> | startup_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>[]</code> | volume_mounts block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#cpu ContainerApp#cpu}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#image ContainerApp#image}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#memory ContainerApp#memory}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#args ContainerApp#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#command ContainerApp#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.env"></a>

```typescript
public readonly env: IResolvable | ContainerAppTemplateContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#env ContainerApp#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: IResolvable | ContainerAppTemplateContainerLivenessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>[]

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#liveness_probe ContainerApp#liveness_probe}

---

##### `readinessProbe`<sup>Optional</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.readinessProbe"></a>

```typescript
public readonly readinessProbe: IResolvable | ContainerAppTemplateContainerReadinessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>[]

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#readiness_probe ContainerApp#readiness_probe}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.startupProbe"></a>

```typescript
public readonly startupProbe: IResolvable | ContainerAppTemplateContainerStartupProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>[]

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#startup_probe ContainerApp#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | ContainerAppTemplateContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#volume_mounts ContainerApp#volume_mounts}

---

### ContainerAppTemplateContainerEnv <a name="ContainerAppTemplateContainerEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerEnv: containerApp.ContainerAppTemplateContainerEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.name">name</a></code> | <code>string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.secretName">secretName</a></code> | <code>string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.value">value</a></code> | <code>string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerLivenessProbe <a name="ContainerAppTemplateContainerLivenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerLivenessProbe: containerApp.ContainerAppTemplateContainerLivenessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.port">port</a></code> | <code>number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.transport">transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.host">host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.initialDelay">initialDelay</a></code> | <code>number</code> | The time in seconds to wait after the container has started before the probe is started. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.path">path</a></code> | <code>string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.header"></a>

```typescript
public readonly header: IResolvable | ContainerAppTemplateContainerLivenessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#host ContainerApp#host}

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

The time in seconds to wait after the container has started before the probe is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#initial_delay ContainerApp#initial_delay}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#path ContainerApp#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerLivenessProbeHeader <a name="ContainerAppTemplateContainerLivenessProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerLivenessProbeHeader: containerApp.ContainerAppTemplateContainerLivenessProbeHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.name">name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.value">value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerReadinessProbe <a name="ContainerAppTemplateContainerReadinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerReadinessProbe: containerApp.ContainerAppTemplateContainerReadinessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.port">port</a></code> | <code>number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.transport">transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.host">host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.path">path</a></code> | <code>string</code> | The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.successCountThreshold">successCountThreshold</a></code> | <code>number</code> | The number of consecutive successful responses required to consider this probe as successful. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.header"></a>

```typescript
public readonly header: IResolvable | ContainerAppTemplateContainerReadinessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#host ContainerApp#host}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#path ContainerApp#path}

---

##### `successCountThreshold`<sup>Optional</sup> <a name="successCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.successCountThreshold"></a>

```typescript
public readonly successCountThreshold: number;
```

- *Type:* number

The number of consecutive successful responses required to consider this probe as successful.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#success_count_threshold ContainerApp#success_count_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerReadinessProbeHeader <a name="ContainerAppTemplateContainerReadinessProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerReadinessProbeHeader: containerApp.ContainerAppTemplateContainerReadinessProbeHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.name">name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.value">value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerStartupProbe <a name="ContainerAppTemplateContainerStartupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerStartupProbe: containerApp.ContainerAppTemplateContainerStartupProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.port">port</a></code> | <code>number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.transport">transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.host">host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.path">path</a></code> | <code>string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.header"></a>

```typescript
public readonly header: IResolvable | ContainerAppTemplateContainerStartupProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#host ContainerApp#host}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#path ContainerApp#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerStartupProbeHeader <a name="ContainerAppTemplateContainerStartupProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerStartupProbeHeader: containerApp.ContainerAppTemplateContainerStartupProbeHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.name">name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.value">value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerVolumeMounts <a name="ContainerAppTemplateContainerVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateContainerVolumeMounts: containerApp.ContainerAppTemplateContainerVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.name">name</a></code> | <code>string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.path">path</a></code> | <code>string</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#path ContainerApp#path}

---

### ContainerAppTemplateCustomScaleRule <a name="ContainerAppTemplateCustomScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateCustomScaleRule: containerApp.ContainerAppTemplateCustomScaleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.customRuleType">customRuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#custom_rule_type ContainerApp#custom_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#metadata ContainerApp#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.authentication">authentication</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>[]</code> | authentication block. |

---

##### `customRuleType`<sup>Required</sup> <a name="customRuleType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.customRuleType"></a>

```typescript
public readonly customRuleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#custom_rule_type ContainerApp#custom_rule_type}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#metadata ContainerApp#metadata}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.authentication"></a>

```typescript
public readonly authentication: IResolvable | ContainerAppTemplateCustomScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>[]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateCustomScaleRuleAuthentication <a name="ContainerAppTemplateCustomScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateCustomScaleRuleAuthentication: containerApp.ContainerAppTemplateCustomScaleRuleAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateHttpScaleRule <a name="ContainerAppTemplateHttpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateHttpScaleRule: containerApp.ContainerAppTemplateHttpScaleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.concurrentRequests">concurrentRequests</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.authentication">authentication</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>[]</code> | authentication block. |

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.concurrentRequests"></a>

```typescript
public readonly concurrentRequests: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.authentication"></a>

```typescript
public readonly authentication: IResolvable | ContainerAppTemplateHttpScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>[]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateHttpScaleRuleAuthentication <a name="ContainerAppTemplateHttpScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateHttpScaleRuleAuthentication: containerApp.ContainerAppTemplateHttpScaleRuleAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Optional</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateInitContainer <a name="ContainerAppTemplateInitContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateInitContainer: containerApp.ContainerAppTemplateInitContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.image">image</a></code> | <code>string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.name">name</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.args">args</a></code> | <code>string[]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.command">command</a></code> | <code>string[]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.cpu">cpu</a></code> | <code>number</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.memory">memory</a></code> | <code>string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>[]</code> | volume_mounts block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#image ContainerApp#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#args ContainerApp#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#command ContainerApp#command}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#cpu ContainerApp#cpu}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.env"></a>

```typescript
public readonly env: IResolvable | ContainerAppTemplateInitContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#env ContainerApp#env}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#memory ContainerApp#memory}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | ContainerAppTemplateInitContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#volume_mounts ContainerApp#volume_mounts}

---

### ContainerAppTemplateInitContainerEnv <a name="ContainerAppTemplateInitContainerEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateInitContainerEnv: containerApp.ContainerAppTemplateInitContainerEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv.property.name">name</a></code> | <code>string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv.property.secretName">secretName</a></code> | <code>string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv.property.value">value</a></code> | <code>string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateInitContainerVolumeMounts <a name="ContainerAppTemplateInitContainerVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateInitContainerVolumeMounts: containerApp.ContainerAppTemplateInitContainerVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts.property.name">name</a></code> | <code>string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts.property.path">path</a></code> | <code>string</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#path ContainerApp#path}

---

### ContainerAppTemplateTcpScaleRule <a name="ContainerAppTemplateTcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateTcpScaleRule: containerApp.ContainerAppTemplateTcpScaleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.concurrentRequests">concurrentRequests</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.authentication">authentication</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>[]</code> | authentication block. |

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.concurrentRequests"></a>

```typescript
public readonly concurrentRequests: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.authentication"></a>

```typescript
public readonly authentication: IResolvable | ContainerAppTemplateTcpScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>[]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateTcpScaleRuleAuthentication <a name="ContainerAppTemplateTcpScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateTcpScaleRuleAuthentication: containerApp.ContainerAppTemplateTcpScaleRuleAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Optional</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateVolume <a name="ContainerAppTemplateVolume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTemplateVolume: containerApp.ContainerAppTemplateVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.name">name</a></code> | <code>string</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageName">storageName</a></code> | <code>string</code> | The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageType">storageType</a></code> | <code>string</code> | The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#name ContainerApp#name}

---

##### `storageName`<sup>Optional</sup> <a name="storageName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageName"></a>

```typescript
public readonly storageName: string;
```

- *Type:* string

The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#storage_name ContainerApp#storage_name}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#storage_type ContainerApp#storage_type}

---

### ContainerAppTimeouts <a name="ContainerAppTimeouts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

const containerAppTimeouts: containerApp.ContainerAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#create ContainerApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#delete ContainerApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#read ContainerApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#update ContainerApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#create ContainerApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#delete ContainerApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#read ContainerApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_app#update ContainerApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppDaprOutputReference <a name="ContainerAppDaprOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppDaprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppPort">resetAppPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppProtocol">resetAppProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppPort` <a name="resetAppPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppPort"></a>

```typescript
public resetAppPort(): void
```

##### `resetAppProtocol` <a name="resetAppProtocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppProtocol"></a>

```typescript
public resetAppProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPortInput">appPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocolInput">appProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPort">appPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocol">appProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appPortInput`<sup>Optional</sup> <a name="appPortInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPortInput"></a>

```typescript
public readonly appPortInput: number;
```

- *Type:* number

---

##### `appProtocolInput`<sup>Optional</sup> <a name="appProtocolInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocolInput"></a>

```typescript
public readonly appProtocolInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appPort`<sup>Required</sup> <a name="appPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPort"></a>

```typescript
public readonly appPort: number;
```

- *Type:* number

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocol"></a>

```typescript
public readonly appProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppDapr;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---


### ContainerAppIdentityOutputReference <a name="ContainerAppIdentityOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---


### ContainerAppIngressCustomDomainOutputReference <a name="ContainerAppIngressCustomDomainOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppIngressCustomDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resetCertificateBindingType">resetCertificateBindingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateBindingType` <a name="resetCertificateBindingType" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resetCertificateBindingType"></a>

```typescript
public resetCertificateBindingType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingTypeInput">certificateBindingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingType">certificateBindingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateBindingTypeInput`<sup>Optional</sup> <a name="certificateBindingTypeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingTypeInput"></a>

```typescript
public readonly certificateBindingTypeInput: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `certificateBindingType`<sup>Required</sup> <a name="certificateBindingType" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingType"></a>

```typescript
public readonly certificateBindingType: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppIngressCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---


### ContainerAppIngressIpSecurityRestrictionList <a name="ContainerAppIngressIpSecurityRestrictionList" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppIngressIpSecurityRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.get"></a>

```typescript
public get(index: number): ContainerAppIngressIpSecurityRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppIngressIpSecurityRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>[]

---


### ContainerAppIngressIpSecurityRestrictionOutputReference <a name="ContainerAppIngressIpSecurityRestrictionOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.ipAddressRangeInput">ipAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ipAddressRangeInput`<sup>Optional</sup> <a name="ipAddressRangeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.ipAddressRangeInput"></a>

```typescript
public readonly ipAddressRangeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppIngressIpSecurityRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>

---


### ContainerAppIngressOutputReference <a name="ContainerAppIngressOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putIpSecurityRestriction">putIpSecurityRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight">putTrafficWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetAllowInsecureConnections">resetAllowInsecureConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExposedPort">resetExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExternalEnabled">resetExternalEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetIpSecurityRestriction">resetIpSecurityRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetTransport">resetTransport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomDomain` <a name="putCustomDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain"></a>

```typescript
public putCustomDomain(value: ContainerAppIngressCustomDomain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---

##### `putIpSecurityRestriction` <a name="putIpSecurityRestriction" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putIpSecurityRestriction"></a>

```typescript
public putIpSecurityRestriction(value: IResolvable | ContainerAppIngressIpSecurityRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putIpSecurityRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>[]

---

##### `putTrafficWeight` <a name="putTrafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight"></a>

```typescript
public putTrafficWeight(value: IResolvable | ContainerAppIngressTrafficWeight[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>[]

---

##### `resetAllowInsecureConnections` <a name="resetAllowInsecureConnections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetAllowInsecureConnections"></a>

```typescript
public resetAllowInsecureConnections(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetExposedPort` <a name="resetExposedPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExposedPort"></a>

```typescript
public resetExposedPort(): void
```

##### `resetExternalEnabled` <a name="resetExternalEnabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExternalEnabled"></a>

```typescript
public resetExternalEnabled(): void
```

##### `resetIpSecurityRestriction` <a name="resetIpSecurityRestriction" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetIpSecurityRestriction"></a>

```typescript
public resetIpSecurityRestriction(): void
```

##### `resetTransport` <a name="resetTransport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetTransport"></a>

```typescript
public resetTransport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference">ContainerAppIngressCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.ipSecurityRestriction">ipSecurityRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList">ContainerAppIngressIpSecurityRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeight">trafficWeight</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList">ContainerAppIngressTrafficWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnectionsInput">allowInsecureConnectionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomainInput">customDomainInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPortInput">exposedPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabledInput">externalEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.ipSecurityRestrictionInput">ipSecurityRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeightInput">trafficWeightInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnections">allowInsecureConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPort">exposedPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabled">externalEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPort">targetPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomain"></a>

```typescript
public readonly customDomain: ContainerAppIngressCustomDomainOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference">ContainerAppIngressCustomDomainOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `ipSecurityRestriction`<sup>Required</sup> <a name="ipSecurityRestriction" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.ipSecurityRestriction"></a>

```typescript
public readonly ipSecurityRestriction: ContainerAppIngressIpSecurityRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestrictionList">ContainerAppIngressIpSecurityRestrictionList</a>

---

##### `trafficWeight`<sup>Required</sup> <a name="trafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeight"></a>

```typescript
public readonly trafficWeight: ContainerAppIngressTrafficWeightList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList">ContainerAppIngressTrafficWeightList</a>

---

##### `allowInsecureConnectionsInput`<sup>Optional</sup> <a name="allowInsecureConnectionsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnectionsInput"></a>

```typescript
public readonly allowInsecureConnectionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: ContainerAppIngressCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---

##### `exposedPortInput`<sup>Optional</sup> <a name="exposedPortInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPortInput"></a>

```typescript
public readonly exposedPortInput: number;
```

- *Type:* number

---

##### `externalEnabledInput`<sup>Optional</sup> <a name="externalEnabledInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabledInput"></a>

```typescript
public readonly externalEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipSecurityRestrictionInput`<sup>Optional</sup> <a name="ipSecurityRestrictionInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.ipSecurityRestrictionInput"></a>

```typescript
public readonly ipSecurityRestrictionInput: IResolvable | ContainerAppIngressIpSecurityRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressIpSecurityRestriction">ContainerAppIngressIpSecurityRestriction</a>[]

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPortInput"></a>

```typescript
public readonly targetPortInput: number;
```

- *Type:* number

---

##### `trafficWeightInput`<sup>Optional</sup> <a name="trafficWeightInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeightInput"></a>

```typescript
public readonly trafficWeightInput: IResolvable | ContainerAppIngressTrafficWeight[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>[]

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `allowInsecureConnections`<sup>Required</sup> <a name="allowInsecureConnections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnections"></a>

```typescript
public readonly allowInsecureConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposedPort`<sup>Required</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPort"></a>

```typescript
public readonly exposedPort: number;
```

- *Type:* number

---

##### `externalEnabled`<sup>Required</sup> <a name="externalEnabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabled"></a>

```typescript
public readonly externalEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppIngress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---


### ContainerAppIngressTrafficWeightList <a name="ContainerAppIngressTrafficWeightList" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppIngressTrafficWeightList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get"></a>

```typescript
public get(index: number): ContainerAppIngressTrafficWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppIngressTrafficWeight[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>[]

---


### ContainerAppIngressTrafficWeightOutputReference <a name="ContainerAppIngressTrafficWeightOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppIngressTrafficWeightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLatestRevision">resetLatestRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetRevisionSuffix">resetRevisionSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetLatestRevision` <a name="resetLatestRevision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLatestRevision"></a>

```typescript
public resetLatestRevision(): void
```

##### `resetRevisionSuffix` <a name="resetRevisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetRevisionSuffix"></a>

```typescript
public resetRevisionSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevisionInput">latestRevisionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffixInput">revisionSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevision">latestRevision</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffix">revisionSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `latestRevisionInput`<sup>Optional</sup> <a name="latestRevisionInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevisionInput"></a>

```typescript
public readonly latestRevisionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `revisionSuffixInput`<sup>Optional</sup> <a name="revisionSuffixInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffixInput"></a>

```typescript
public readonly revisionSuffixInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevision"></a>

```typescript
public readonly latestRevision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `revisionSuffix`<sup>Required</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffix"></a>

```typescript
public readonly revisionSuffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppIngressTrafficWeight;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>

---


### ContainerAppRegistryList <a name="ContainerAppRegistryList" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppRegistryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get"></a>

```typescript
public get(index: number): ContainerAppRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>[]

---


### ContainerAppRegistryOutputReference <a name="ContainerAppRegistryOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppRegistryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetPasswordSecretName">resetPasswordSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetPasswordSecretName` <a name="resetPasswordSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetPasswordSecretName"></a>

```typescript
public resetPasswordSecretName(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identityInput">identityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretNameInput">passwordSecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretName">passwordSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identityInput"></a>

```typescript
public readonly identityInput: string;
```

- *Type:* string

---

##### `passwordSecretNameInput`<sup>Optional</sup> <a name="passwordSecretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretNameInput"></a>

```typescript
public readonly passwordSecretNameInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `passwordSecretName`<sup>Required</sup> <a name="passwordSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretName"></a>

```typescript
public readonly passwordSecretName: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppRegistry;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>

---


### ContainerAppSecretList <a name="ContainerAppSecretList" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get"></a>

```typescript
public get(index: number): ContainerAppSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>[]

---


### ContainerAppSecretOutputReference <a name="ContainerAppSecretOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>

---


### ContainerAppTemplateAzureQueueScaleRuleAuthenticationList <a name="ContainerAppTemplateAzureQueueScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateAzureQueueScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>[]

---


### ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```typescript
public readonly triggerParameterInput: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateAzureQueueScaleRuleAuthentication;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>

---


### ContainerAppTemplateAzureQueueScaleRuleList <a name="ContainerAppTemplateAzureQueueScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateAzureQueueScaleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateAzureQueueScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateAzureQueueScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>[]

---


### ContainerAppTemplateAzureQueueScaleRuleOutputReference <a name="ContainerAppTemplateAzureQueueScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: IResolvable | ContainerAppTemplateAzureQueueScaleRuleAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList">ContainerAppTemplateAzureQueueScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLengthInput">queueLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueNameInput">queueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLength">queueLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authentication"></a>

```typescript
public readonly authentication: ContainerAppTemplateAzureQueueScaleRuleAuthenticationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList">ContainerAppTemplateAzureQueueScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | ContainerAppTemplateAzureQueueScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queueLengthInput`<sup>Optional</sup> <a name="queueLengthInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLengthInput"></a>

```typescript
public readonly queueLengthInput: number;
```

- *Type:* number

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueNameInput"></a>

```typescript
public readonly queueNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queueLength`<sup>Required</sup> <a name="queueLength" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLength"></a>

```typescript
public readonly queueLength: number;
```

- *Type:* number

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateAzureQueueScaleRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>

---


### ContainerAppTemplateContainerEnvList <a name="ContainerAppTemplateContainerEnvList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>[]

---


### ContainerAppTemplateContainerEnvOutputReference <a name="ContainerAppTemplateContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetSecretName"></a>

```typescript
public resetSecretName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>

---


### ContainerAppTemplateContainerList <a name="ContainerAppTemplateContainerList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>[]

---


### ContainerAppTemplateContainerLivenessProbeHeaderList <a name="ContainerAppTemplateContainerLivenessProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerLivenessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerLivenessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>[]

---


### ContainerAppTemplateContainerLivenessProbeHeaderOutputReference <a name="ContainerAppTemplateContainerLivenessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerLivenessProbeHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>

---


### ContainerAppTemplateContainerLivenessProbeList <a name="ContainerAppTemplateContainerLivenessProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerLivenessProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerLivenessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerLivenessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>[]

---


### ContainerAppTemplateContainerLivenessProbeOutputReference <a name="ContainerAppTemplateContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ContainerAppTemplateContainerLivenessProbeHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>[]

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold"></a>

```typescript
public resetFailureCountThreshold(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetInitialDelay"></a>

```typescript
public resetInitialDelay(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList">ContainerAppTemplateContainerLivenessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds">terminationGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelay">initialDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.header"></a>

```typescript
public readonly header: ContainerAppTemplateContainerLivenessProbeHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList">ContainerAppTemplateContainerLivenessProbeHeaderList</a>

---

##### `terminationGracePeriodSeconds`<sup>Required</sup> <a name="terminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```typescript
public readonly terminationGracePeriodSeconds: number;
```

- *Type:* number

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput"></a>

```typescript
public readonly failureCountThresholdInput: number;
```

- *Type:* number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ContainerAppTemplateContainerLivenessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelayInput"></a>

```typescript
public readonly initialDelayInput: number;
```

- *Type:* number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerLivenessProbe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>

---


### ContainerAppTemplateContainerOutputReference <a name="ContainerAppTemplateContainerOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe">putReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetReadinessProbe">resetReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | ContainerAppTemplateContainerEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>[]

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe"></a>

```typescript
public putLivenessProbe(value: IResolvable | ContainerAppTemplateContainerLivenessProbe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>[]

---

##### `putReadinessProbe` <a name="putReadinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe"></a>

```typescript
public putReadinessProbe(value: IResolvable | ContainerAppTemplateContainerReadinessProbe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>[]

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe"></a>

```typescript
public putStartupProbe(value: IResolvable | ContainerAppTemplateContainerStartupProbe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>[]

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | ContainerAppTemplateContainerVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetLivenessProbe"></a>

```typescript
public resetLivenessProbe(): void
```

##### `resetReadinessProbe` <a name="resetReadinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetReadinessProbe"></a>

```typescript
public resetReadinessProbe(): void
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetStartupProbe"></a>

```typescript
public resetStartupProbe(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList">ContainerAppTemplateContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList">ContainerAppTemplateContainerLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbe">readinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList">ContainerAppTemplateContainerReadinessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList">ContainerAppTemplateContainerStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList">ContainerAppTemplateContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbeInput">readinessProbeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.env"></a>

```typescript
public readonly env: ContainerAppTemplateContainerEnvList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList">ContainerAppTemplateContainerEnvList</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: ContainerAppTemplateContainerLivenessProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList">ContainerAppTemplateContainerLivenessProbeList</a>

---

##### `readinessProbe`<sup>Required</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbe"></a>

```typescript
public readonly readinessProbe: ContainerAppTemplateContainerReadinessProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList">ContainerAppTemplateContainerReadinessProbeList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: ContainerAppTemplateContainerStartupProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList">ContainerAppTemplateContainerStartupProbeList</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: ContainerAppTemplateContainerVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList">ContainerAppTemplateContainerVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | ContainerAppTemplateContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbeInput"></a>

```typescript
public readonly livenessProbeInput: IResolvable | ContainerAppTemplateContainerLivenessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>[]

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readinessProbeInput`<sup>Optional</sup> <a name="readinessProbeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbeInput"></a>

```typescript
public readonly readinessProbeInput: IResolvable | ContainerAppTemplateContainerReadinessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>[]

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbeInput"></a>

```typescript
public readonly startupProbeInput: IResolvable | ContainerAppTemplateContainerStartupProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>[]

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | ContainerAppTemplateContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>

---


### ContainerAppTemplateContainerReadinessProbeHeaderList <a name="ContainerAppTemplateContainerReadinessProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerReadinessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerReadinessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>[]

---


### ContainerAppTemplateContainerReadinessProbeHeaderOutputReference <a name="ContainerAppTemplateContainerReadinessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerReadinessProbeHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>

---


### ContainerAppTemplateContainerReadinessProbeList <a name="ContainerAppTemplateContainerReadinessProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerReadinessProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerReadinessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerReadinessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>[]

---


### ContainerAppTemplateContainerReadinessProbeOutputReference <a name="ContainerAppTemplateContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold">resetSuccessCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ContainerAppTemplateContainerReadinessProbeHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>[]

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold"></a>

```typescript
public resetFailureCountThreshold(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSuccessCountThreshold` <a name="resetSuccessCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold"></a>

```typescript
public resetSuccessCountThreshold(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList">ContainerAppTemplateContainerReadinessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput">successCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThreshold">successCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.header"></a>

```typescript
public readonly header: ContainerAppTemplateContainerReadinessProbeHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList">ContainerAppTemplateContainerReadinessProbeHeaderList</a>

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput"></a>

```typescript
public readonly failureCountThresholdInput: number;
```

- *Type:* number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ContainerAppTemplateContainerReadinessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `successCountThresholdInput`<sup>Optional</sup> <a name="successCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput"></a>

```typescript
public readonly successCountThresholdInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `successCountThreshold`<sup>Required</sup> <a name="successCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThreshold"></a>

```typescript
public readonly successCountThreshold: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerReadinessProbe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>

---


### ContainerAppTemplateContainerStartupProbeHeaderList <a name="ContainerAppTemplateContainerStartupProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerStartupProbeHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerStartupProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerStartupProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>[]

---


### ContainerAppTemplateContainerStartupProbeHeaderOutputReference <a name="ContainerAppTemplateContainerStartupProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerStartupProbeHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>

---


### ContainerAppTemplateContainerStartupProbeList <a name="ContainerAppTemplateContainerStartupProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerStartupProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerStartupProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerStartupProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>[]

---


### ContainerAppTemplateContainerStartupProbeOutputReference <a name="ContainerAppTemplateContainerStartupProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ContainerAppTemplateContainerStartupProbeHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>[]

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold"></a>

```typescript
public resetFailureCountThreshold(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList">ContainerAppTemplateContainerStartupProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds">terminationGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.header"></a>

```typescript
public readonly header: ContainerAppTemplateContainerStartupProbeHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList">ContainerAppTemplateContainerStartupProbeHeaderList</a>

---

##### `terminationGracePeriodSeconds`<sup>Required</sup> <a name="terminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```typescript
public readonly terminationGracePeriodSeconds: number;
```

- *Type:* number

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput"></a>

```typescript
public readonly failureCountThresholdInput: number;
```

- *Type:* number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ContainerAppTemplateContainerStartupProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerStartupProbe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>

---


### ContainerAppTemplateContainerVolumeMountsList <a name="ContainerAppTemplateContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>[]

---


### ContainerAppTemplateContainerVolumeMountsOutputReference <a name="ContainerAppTemplateContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateContainerVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>

---


### ContainerAppTemplateCustomScaleRuleAuthenticationList <a name="ContainerAppTemplateCustomScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateCustomScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>[]

---


### ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```typescript
public readonly triggerParameterInput: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateCustomScaleRuleAuthentication;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>

---


### ContainerAppTemplateCustomScaleRuleList <a name="ContainerAppTemplateCustomScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateCustomScaleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateCustomScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateCustomScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>[]

---


### ContainerAppTemplateCustomScaleRuleOutputReference <a name="ContainerAppTemplateCustomScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateCustomScaleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: IResolvable | ContainerAppTemplateCustomScaleRuleAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>[]

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList">ContainerAppTemplateCustomScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleTypeInput">customRuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleType">customRuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authentication"></a>

```typescript
public readonly authentication: ContainerAppTemplateCustomScaleRuleAuthenticationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList">ContainerAppTemplateCustomScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | ContainerAppTemplateCustomScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>[]

---

##### `customRuleTypeInput`<sup>Optional</sup> <a name="customRuleTypeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleTypeInput"></a>

```typescript
public readonly customRuleTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `customRuleType`<sup>Required</sup> <a name="customRuleType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleType"></a>

```typescript
public readonly customRuleType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateCustomScaleRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>

---


### ContainerAppTemplateHttpScaleRuleAuthenticationList <a name="ContainerAppTemplateHttpScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateHttpScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>[]

---


### ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resetTriggerParameter">resetTriggerParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTriggerParameter` <a name="resetTriggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resetTriggerParameter"></a>

```typescript
public resetTriggerParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```typescript
public readonly triggerParameterInput: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateHttpScaleRuleAuthentication;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>

---


### ContainerAppTemplateHttpScaleRuleList <a name="ContainerAppTemplateHttpScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateHttpScaleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateHttpScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateHttpScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>[]

---


### ContainerAppTemplateHttpScaleRuleOutputReference <a name="ContainerAppTemplateHttpScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateHttpScaleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: IResolvable | ContainerAppTemplateHttpScaleRuleAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>[]

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList">ContainerAppTemplateHttpScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequestsInput">concurrentRequestsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequests">concurrentRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authentication"></a>

```typescript
public readonly authentication: ContainerAppTemplateHttpScaleRuleAuthenticationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList">ContainerAppTemplateHttpScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | ContainerAppTemplateHttpScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>[]

---

##### `concurrentRequestsInput`<sup>Optional</sup> <a name="concurrentRequestsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequestsInput"></a>

```typescript
public readonly concurrentRequestsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequests"></a>

```typescript
public readonly concurrentRequests: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateHttpScaleRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>

---


### ContainerAppTemplateInitContainerEnvList <a name="ContainerAppTemplateInitContainerEnvList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateInitContainerEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateInitContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateInitContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>[]

---


### ContainerAppTemplateInitContainerEnvOutputReference <a name="ContainerAppTemplateInitContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateInitContainerEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.resetSecretName"></a>

```typescript
public resetSecretName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateInitContainerEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>

---


### ContainerAppTemplateInitContainerList <a name="ContainerAppTemplateInitContainerList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateInitContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateInitContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>[]

---


### ContainerAppTemplateInitContainerOutputReference <a name="ContainerAppTemplateInitContainerOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateInitContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | ContainerAppTemplateInitContainerEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>[]

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | ContainerAppTemplateInitContainerVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList">ContainerAppTemplateInitContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList">ContainerAppTemplateInitContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.env"></a>

```typescript
public readonly env: ContainerAppTemplateInitContainerEnvList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnvList">ContainerAppTemplateInitContainerEnvList</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: ContainerAppTemplateInitContainerVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList">ContainerAppTemplateInitContainerVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | ContainerAppTemplateInitContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerEnv">ContainerAppTemplateInitContainerEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | ContainerAppTemplateInitContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateInitContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>

---


### ContainerAppTemplateInitContainerVolumeMountsList <a name="ContainerAppTemplateInitContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateInitContainerVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateInitContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateInitContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>[]

---


### ContainerAppTemplateInitContainerVolumeMountsOutputReference <a name="ContainerAppTemplateInitContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateInitContainerVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerVolumeMounts">ContainerAppTemplateInitContainerVolumeMounts</a>

---


### ContainerAppTemplateOutputReference <a name="ContainerAppTemplateOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule">putAzureQueueScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule">putCustomScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule">putHttpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putInitContainer">putInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule">putTcpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetAzureQueueScaleRule">resetAzureQueueScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetCustomScaleRule">resetCustomScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetHttpScaleRule">resetHttpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetInitContainer">resetInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMaxReplicas">resetMaxReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMinReplicas">resetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetRevisionSuffix">resetRevisionSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetTcpScaleRule">resetTcpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureQueueScaleRule` <a name="putAzureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule"></a>

```typescript
public putAzureQueueScaleRule(value: IResolvable | ContainerAppTemplateAzureQueueScaleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>[]

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer"></a>

```typescript
public putContainer(value: IResolvable | ContainerAppTemplateContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>[]

---

##### `putCustomScaleRule` <a name="putCustomScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule"></a>

```typescript
public putCustomScaleRule(value: IResolvable | ContainerAppTemplateCustomScaleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>[]

---

##### `putHttpScaleRule` <a name="putHttpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule"></a>

```typescript
public putHttpScaleRule(value: IResolvable | ContainerAppTemplateHttpScaleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>[]

---

##### `putInitContainer` <a name="putInitContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putInitContainer"></a>

```typescript
public putInitContainer(value: IResolvable | ContainerAppTemplateInitContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putInitContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>[]

---

##### `putTcpScaleRule` <a name="putTcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule"></a>

```typescript
public putTcpScaleRule(value: IResolvable | ContainerAppTemplateTcpScaleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>[]

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume"></a>

```typescript
public putVolume(value: IResolvable | ContainerAppTemplateVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>[]

---

##### `resetAzureQueueScaleRule` <a name="resetAzureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetAzureQueueScaleRule"></a>

```typescript
public resetAzureQueueScaleRule(): void
```

##### `resetCustomScaleRule` <a name="resetCustomScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetCustomScaleRule"></a>

```typescript
public resetCustomScaleRule(): void
```

##### `resetHttpScaleRule` <a name="resetHttpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetHttpScaleRule"></a>

```typescript
public resetHttpScaleRule(): void
```

##### `resetInitContainer` <a name="resetInitContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetInitContainer"></a>

```typescript
public resetInitContainer(): void
```

##### `resetMaxReplicas` <a name="resetMaxReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMaxReplicas"></a>

```typescript
public resetMaxReplicas(): void
```

##### `resetMinReplicas` <a name="resetMinReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMinReplicas"></a>

```typescript
public resetMinReplicas(): void
```

##### `resetRevisionSuffix` <a name="resetRevisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetRevisionSuffix"></a>

```typescript
public resetRevisionSuffix(): void
```

##### `resetTcpScaleRule` <a name="resetTcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetTcpScaleRule"></a>

```typescript
public resetTcpScaleRule(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetVolume"></a>

```typescript
public resetVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRule">azureQueueScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList">ContainerAppTemplateAzureQueueScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList">ContainerAppTemplateContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRule">customScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList">ContainerAppTemplateCustomScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRule">httpScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList">ContainerAppTemplateHttpScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.initContainer">initContainer</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList">ContainerAppTemplateInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRule">tcpScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList">ContainerAppTemplateTcpScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList">ContainerAppTemplateVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRuleInput">azureQueueScaleRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.containerInput">containerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRuleInput">customScaleRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRuleInput">httpScaleRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.initContainerInput">initContainerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffixInput">revisionSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRuleInput">tcpScaleRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicas">minReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffix">revisionSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureQueueScaleRule`<sup>Required</sup> <a name="azureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRule"></a>

```typescript
public readonly azureQueueScaleRule: ContainerAppTemplateAzureQueueScaleRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList">ContainerAppTemplateAzureQueueScaleRuleList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.container"></a>

```typescript
public readonly container: ContainerAppTemplateContainerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList">ContainerAppTemplateContainerList</a>

---

##### `customScaleRule`<sup>Required</sup> <a name="customScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRule"></a>

```typescript
public readonly customScaleRule: ContainerAppTemplateCustomScaleRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList">ContainerAppTemplateCustomScaleRuleList</a>

---

##### `httpScaleRule`<sup>Required</sup> <a name="httpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRule"></a>

```typescript
public readonly httpScaleRule: ContainerAppTemplateHttpScaleRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList">ContainerAppTemplateHttpScaleRuleList</a>

---

##### `initContainer`<sup>Required</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.initContainer"></a>

```typescript
public readonly initContainer: ContainerAppTemplateInitContainerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainerList">ContainerAppTemplateInitContainerList</a>

---

##### `tcpScaleRule`<sup>Required</sup> <a name="tcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRule"></a>

```typescript
public readonly tcpScaleRule: ContainerAppTemplateTcpScaleRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList">ContainerAppTemplateTcpScaleRuleList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volume"></a>

```typescript
public readonly volume: ContainerAppTemplateVolumeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList">ContainerAppTemplateVolumeList</a>

---

##### `azureQueueScaleRuleInput`<sup>Optional</sup> <a name="azureQueueScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRuleInput"></a>

```typescript
public readonly azureQueueScaleRuleInput: IResolvable | ContainerAppTemplateAzureQueueScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>[]

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: IResolvable | ContainerAppTemplateContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>[]

---

##### `customScaleRuleInput`<sup>Optional</sup> <a name="customScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRuleInput"></a>

```typescript
public readonly customScaleRuleInput: IResolvable | ContainerAppTemplateCustomScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>[]

---

##### `httpScaleRuleInput`<sup>Optional</sup> <a name="httpScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRuleInput"></a>

```typescript
public readonly httpScaleRuleInput: IResolvable | ContainerAppTemplateHttpScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>[]

---

##### `initContainerInput`<sup>Optional</sup> <a name="initContainerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.initContainerInput"></a>

```typescript
public readonly initContainerInput: IResolvable | ContainerAppTemplateInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateInitContainer">ContainerAppTemplateInitContainer</a>[]

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicasInput"></a>

```typescript
public readonly maxReplicasInput: number;
```

- *Type:* number

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicasInput"></a>

```typescript
public readonly minReplicasInput: number;
```

- *Type:* number

---

##### `revisionSuffixInput`<sup>Optional</sup> <a name="revisionSuffixInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffixInput"></a>

```typescript
public readonly revisionSuffixInput: string;
```

- *Type:* string

---

##### `tcpScaleRuleInput`<sup>Optional</sup> <a name="tcpScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRuleInput"></a>

```typescript
public readonly tcpScaleRuleInput: IResolvable | ContainerAppTemplateTcpScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>[]

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | ContainerAppTemplateVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>[]

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

---

##### `revisionSuffix`<sup>Required</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffix"></a>

```typescript
public readonly revisionSuffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppTemplate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---


### ContainerAppTemplateTcpScaleRuleAuthenticationList <a name="ContainerAppTemplateTcpScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateTcpScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>[]

---


### ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resetTriggerParameter">resetTriggerParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTriggerParameter` <a name="resetTriggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resetTriggerParameter"></a>

```typescript
public resetTriggerParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```typescript
public readonly triggerParameterInput: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateTcpScaleRuleAuthentication;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>

---


### ContainerAppTemplateTcpScaleRuleList <a name="ContainerAppTemplateTcpScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateTcpScaleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateTcpScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateTcpScaleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>[]

---


### ContainerAppTemplateTcpScaleRuleOutputReference <a name="ContainerAppTemplateTcpScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateTcpScaleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: IResolvable | ContainerAppTemplateTcpScaleRuleAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>[]

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList">ContainerAppTemplateTcpScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequestsInput">concurrentRequestsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequests">concurrentRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authentication"></a>

```typescript
public readonly authentication: ContainerAppTemplateTcpScaleRuleAuthenticationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList">ContainerAppTemplateTcpScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | ContainerAppTemplateTcpScaleRuleAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>[]

---

##### `concurrentRequestsInput`<sup>Optional</sup> <a name="concurrentRequestsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequestsInput"></a>

```typescript
public readonly concurrentRequestsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequests"></a>

```typescript
public readonly concurrentRequests: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateTcpScaleRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>

---


### ContainerAppTemplateVolumeList <a name="ContainerAppTemplateVolumeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get"></a>

```typescript
public get(index: number): ContainerAppTemplateVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>[]

---


### ContainerAppTemplateVolumeOutputReference <a name="ContainerAppTemplateVolumeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTemplateVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageName">resetStorageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageName` <a name="resetStorageName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageName"></a>

```typescript
public resetStorageName(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageType"></a>

```typescript
public resetStorageType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageNameInput">storageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageName">storageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageNameInput`<sup>Optional</sup> <a name="storageNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageNameInput"></a>

```typescript
public readonly storageNameInput: string;
```

- *Type:* string

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageName`<sup>Required</sup> <a name="storageName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageName"></a>

```typescript
public readonly storageName: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTemplateVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>

---


### ContainerAppTimeoutsOutputReference <a name="ContainerAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerApp } from '@cdktf/provider-azurerm'

new containerApp.ContainerAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

---



