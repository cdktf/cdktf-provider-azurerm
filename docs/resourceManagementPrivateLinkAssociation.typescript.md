# `azurerm_resource_management_private_link_association`

Refer to the Terraform Registory for docs: [`azurerm_resource_management_private_link_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association).

# `resourceManagementPrivateLinkAssociation` Submodule <a name="`resourceManagementPrivateLinkAssociation` Submodule" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagementPrivateLinkAssociation <a name="ResourceManagementPrivateLinkAssociation" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association azurerm_resource_management_private_link_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

new resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation(scope: Construct, id: string, config: ResourceManagementPrivateLinkAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig">ResourceManagementPrivateLinkAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig">ResourceManagementPrivateLinkAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceManagementPrivateLinkAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceManagementPrivateLinkAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ResourceManagementPrivateLinkAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceManagementPrivateLinkAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceManagementPrivateLinkAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceManagementPrivateLinkAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference">ResourceManagementPrivateLinkAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkIdInput">resourceManagementPrivateLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkId">resourceManagementPrivateLinkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceManagementPrivateLinkAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference">ResourceManagementPrivateLinkAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupIdInput"></a>

```typescript
public readonly managementGroupIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceManagementPrivateLinkIdInput`<sup>Optional</sup> <a name="resourceManagementPrivateLinkIdInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkIdInput"></a>

```typescript
public readonly resourceManagementPrivateLinkIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceManagementPrivateLinkAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceManagementPrivateLinkId`<sup>Required</sup> <a name="resourceManagementPrivateLinkId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkId"></a>

```typescript
public readonly resourceManagementPrivateLinkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagementPrivateLinkAssociationConfig <a name="ResourceManagementPrivateLinkAssociationConfig" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.Initializer"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

const resourceManagementPrivateLinkAssociationConfig: resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.resourceManagementPrivateLinkId">resourceManagementPrivateLinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}.

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}.

---

##### `resourceManagementPrivateLinkId`<sup>Required</sup> <a name="resourceManagementPrivateLinkId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.resourceManagementPrivateLinkId"></a>

```typescript
public readonly resourceManagementPrivateLinkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceManagementPrivateLinkAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#timeouts ResourceManagementPrivateLinkAssociation#timeouts}

---

### ResourceManagementPrivateLinkAssociationTimeouts <a name="ResourceManagementPrivateLinkAssociationTimeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.Initializer"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

const resourceManagementPrivateLinkAssociationTimeouts: resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#create ResourceManagementPrivateLinkAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#delete ResourceManagementPrivateLinkAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#read ResourceManagementPrivateLinkAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#create ResourceManagementPrivateLinkAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#delete ResourceManagementPrivateLinkAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/resource_management_private_link_association#read ResourceManagementPrivateLinkAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagementPrivateLinkAssociationTimeoutsOutputReference <a name="ResourceManagementPrivateLinkAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceManagementPrivateLinkAssociation } from '@cdktf/provider-azurerm'

new resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceManagementPrivateLinkAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---



